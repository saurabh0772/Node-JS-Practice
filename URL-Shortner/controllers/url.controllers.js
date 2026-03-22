import UrlModel from '../models/url.models.js';
import shortid from 'shortid';

export const handleGenerateShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }

    const shortID = shortid.generate();

    await UrlModel.create({
        shortID: shortID,
        redirectURL: body.url,
        visitsHistory: []
    })
        .then((data) => {
            res.json({ shortID: data.shortID });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        })


}




export const handleRedirectToUrlById = async (req, res) => {
    const shortId = req.params.id;

    const entry = await UrlModel.findOneAndUpdate({
        shortID : shortId
    }, {
        $push : {
            visitsHistory:{
                timestamp : Date.now(),
            }
        }
    })

    res.redirect(entry.redirectURL);
}

export const handleAnalyticsById = async (req, res) => {
    const shortId = req.params.id;

    const entry = await UrlModel.findOne({ shortID: shortId });

    if (!entry) {
        return res.status(404).json({ msg: "url not found" });
    }

    return res.json({
        totalClicks: entry.visitsHistory.length,
        analytics: entry.visitsHistory
    });
};