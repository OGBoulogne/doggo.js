const Discord = require('discord.js')
const doggoJS = new Discord.Client()
const getJSON = require('get-json')
const commandPrefix = '>'

doggoJS.login('NjUzOTM0MTIzMDY4NDI0MjMz.Xe-NpA.BzlfYDNhZp8_SJ-XeQSWTHdRfwc')

doggoJS.on('message', message => {
    if (message.content.startsWith(commandPrefix + 'doggo')) {
        const breed = message.content.split(' ')
        if (breed[2] != undefined){
            const lowerCaseBreed = breed[1].toLowerCase()
            const lowerCaseSubBreed = breed[2].toLowerCase()
            const source = `https://dog.ceo/api/breed/${breed[1]}/${breed[2]}/images`
            getJSON(source, (err, res) => {
                if (err) {
                    return message.channel.send('Race non trouvée.')
                }
                console.log(res.message)
                const i = res.message.length
                message.channel.send(res.message[Math.floor(Math.random() * Math.floor(i))])
            })
        }
        else if (breed[1] != undefined){
            const lowerCaseBreed = breed[1].toLowerCase()
            const source = `https://dog.ceo/api/breed/${lowerCaseBreed}/images/random`
            getJSON(source, (err, res) => {
                if (err) {
                    return message.channel.send('Race non trouvée.')
                } 
                console.log(res.message)
                message.channel.send(res.message)
            })
        }
        else {
            const source = `https://dog.ceo/api/breeds/image/random`
            getJSON(source, (err, res) => {
                if (err) {
                    return message.channel.send('L\'API ne répond pas.')
                }
                console.log(res.message)
                message.channel.send(res.message)
            })
        }

    }
})