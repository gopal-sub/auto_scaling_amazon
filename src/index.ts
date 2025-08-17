import express from 'express';
import os from 'os'




const app = express();

app.use(express.json());


app.get('/health', (req, res)=>{
    res.status(200).json({
        msg: "hello"
    })
});

app.post('/cpu', (req, res)=>{
    let till = req.body.till;
    till = Number(till);
    let sum = 0;

    for(let i=0; i<till;i++){
        sum+=i;
    }
    res.send(sum);
});

app.get('/host', (req, res)=>{
    const host = os.hostname();
    // console.log(host)
    res.send(host);
})

app.listen(3000, ()=>{
    console.log("server running");
});

