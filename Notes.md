Node JS Notes :

Node js architecture ?

when a request come to server, it comes in event queue, and there is a event loop, which takes requests from event queue and checks that the req is blocking req or non blocking req, 
if it is non blocking req, then it directly execute
and if it is blocking req, then it goes to thread loop , where a thread is assign to that req, and complete its execution...

Max no of thread = total no of cores of cpu of a machine

Blocking req - Sync
Non Blocking req - Async