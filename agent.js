'use strict';

const {spawn} = require('child_process');

module.exports = agent => {
    agent.messenger.on('egg-ready', async function(){

        spawn('node', ['./realtr.js'], {
            stdio: 'ignore',
            detached: true
        }).unref();
    });

    process.on('SIGINT', ()=>{
        console.log('SIGINT');
    });

};
