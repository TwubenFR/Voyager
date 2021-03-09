

module.exports = {
    name: "flightplan",
    description: "Flight planner",
    async execute(message, args, Discord, client) {
        let messageArgs = args.join(' ');
        const channel = client.channels.cache.get('818423930309050378'); //Change ID for channel logs ID
        

        const embedCrew = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle("Flight planner")
            .setColor('#F1652C')
            .setDescription(`Set your crew!`)
            .addField('\u200B', '\u200B')
            .addField("Flight crew?", '\u200B')
        const msg1 = await message.channel.send(embedCrew);
        message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }, message.delete()).then(async CrewName => {
            let crewName = CrewName.first();
            msg1.delete();
            CrewName.first().delete();



            const embedRank = new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setTitle("Flight planner")
                .setColor('#F1652C')
                .setDescription(`Set your Rank!`)
                .addField('\u200B', '\u200B')
                .addField(`Flight Crew:`, `${crewName}`)
                .addField(`Rank?`, '\u200B')
            const rankmessg = await message.channel.send(embedRank);
            message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async Rank => {
                rankmessg.delete();
                let rank = Rank.first();
                Rank.first().delete();


                const FLHours = new Discord.MessageEmbed()
                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    .setTitle("Flight planner")
                    .setColor('#F1652C')
                    .setDescription(`Set your Flight Hours!`)
                    .addField('\u200B', '\u200B')
                    .addField(`Flight Crew:`, `${crewName}`)
                    .addField(`Rank:`, ` ${rank}`)
                    .addField(`Flight Hours?`, '\u200B')
                const msg3 = await message.channel.send(FLHours);
                message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async FlHours => {
                    let flHours = FlHours.first();
                    msg3.delete();
                    FlHours.first().delete();


                    const embedDeparture = new Discord.MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .setTitle("Flight planner")
                        .setColor('#F1652C')
                        .setDescription(`Set your Departure!`)
                        .addField('\u200B', '\u200B')
                        .addField(`Flight Crew:`, `${crewName}`)
                        .addField(`Rank:`, `${rank}`)
                        .addField(`Flight Hours:`, `${flHours}`)
                        .addField(`Departure?`, '\u200B')
                    const msg4 = await message.channel.send(embedDeparture);
                    message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async Departure => {
                        let departure = Departure.first();
                        msg4.delete();
                        Departure.first().delete();


                        const embedArrival = new Discord.MessageEmbed()
                            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .setTitle("Flight planner")
                            .setColor('#F1652C')
                            .setDescription(`Set your Arrival!`)
                            .addField('\u200B', '\u200B')
                            .addField(`Flight Crew:`, `${crewName}`)
                            .addField(`Rank:`, `${rank}`)
                            .addField(`Flight Hours:`, `${flHours}`)
                            .addField(`Departure:`, `${departure}`)
                            .addField(`Arrival?`, '\u200B')
                        const msg5 = await message.channel.send(embedArrival);
                        message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async Arrival => {
                            let arrival = Arrival.first();
                            msg5.delete();
                            Arrival.first().delete();


                            const FLCruise = new Discord.MessageEmbed()
                                .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                .setTitle("Flight planner")
                                .setColor('#F1652C')
                                .setDescription(`Set your Cruise Altidude!`)
                                .addField('\u200B', '\u200B')
                                .addField(`Flight Crew:`, `${crewName}`)
                                .addField(`Rank:`, `${rank}`)
                                .addField(`Flight Hours:`, `${flHours}`)
                                .addField(`Departure:`, `${departure}`)
                                .addField(`Arrival:`, `${arrival}`)
                                .addField(`Cruise Altitude?`, '\u200B')
                            const msg6 = await message.channel.send(FLCruise);
                            message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async CruiseAlt => {
                                let cruiseAlt = CruiseAlt.first();
                                msg6.delete();
                                CruiseAlt.first().delete();


                                const Duration = new Discord.MessageEmbed()
                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                    .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                    .setTitle("Flight planner")
                                    .setColor('#F1652C')
                                    .setDescription(`Set your Flight Duration!`)
                                    .addField('\u200B', '\u200B')
                                    .addField(`Flight Crew:`, `${crewName}`)
                                    .addField(`Rank:`, `${rank}`)
                                    .addField(`Flight Hours:`, `${flHours}`)
                                    .addField(`Departure:`, `${departure}`)
                                    .addField(`Arrival:`, `${arrival}`)
                                    .addField(`Cruise Altitude:`, `${cruiseAlt}`)
                                    .addField(`Flight Duration?`, '\u200B')
                                const msg7 = await message.channel.send(Duration);
                                message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async FlDuration => {
                                    let duration = FlDuration.first();
                                    msg7.delete();
                                    FlDuration.first().delete();


                                    const Plane = new Discord.MessageEmbed()
                                        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                        .setTitle("Flight planner")
                                        .setColor('#F1652C')
                                        .setDescription(`Set your Plane!`)
                                        .addField('\u200B', '\u200B')
                                        .addField(`Flight Crew:`, `${crewName}`)
                                        .addField(`Rank:`, `${rank}`)
                                        .addField(`Flight Hours:`, `${flHours}`)
                                        .addField(`Departure:`, `${departure}`)
                                        .addField(`Arrival:`, `${arrival}`)
                                        .addField(`Cruise Altitude:`, `${cruiseAlt}`)
                                        .addField(`Flight Duration:`, ` ${duration}`)
                                        .addField(`Plane?`, '\u200B')
                                    const msg8 = await message.channel.send(Plane);
                                    message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async PLane => {
                                        let plane = PLane.first();
                                        msg8.delete();
                                        PLane.first().delete();


                                        const FlightPlan = new Discord.MessageEmbed()
                                            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                            .setTitle("Flight planner")
                                            .setColor('#F1652C')
                                            .setDescription(`Set your Flight Request Type!`)
                                            .addField('\u200B', '\u200B')
                                            .addField(`Flight Crew:`, `${crewName}`)
                                            .addField(`Rank:`, `${rank}`)
                                            .addField(`Flight Hours:`, `${flHours}`)
                                            .addField(`Departure:`, `${departure}`)
                                            .addField(`Arrival:`, `${arrival}`)
                                            .addField(`Cruise Altitude:`, `${cruiseAlt}`)
                                            .addField(`Flight Duration:`, ` ${duration}`)
                                            .addField(`Plane:`, `${plane}`)
                                            .addField(`Request Type?`, '\u200B')
                                        const msg9 = await message.channel.send(FlightPlan);
                                        message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async FLRequest => {
                                            let flRequest = FLRequest.first();
                                            msg9.delete();
                                            FLRequest.first().delete();


                                            const Callsign = new Discord.MessageEmbed()
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                                .setTitle("Flight planner")
                                                .setColor('#F1652C')
                                                .setDescription(`Set your Flight Request Type!`)
                                                .addField('\u200B', '\u200B')
                                                .addField(`Flight Crew:`, `${crewName}`)
                                                .addField(`Rank:`, `${rank}`)
                                                .addField(`Flight Hours:`, `${flHours}`)
                                                .addField(`Departure:`, `${departure}`)
                                                .addField(`Arrival:`, `${arrival}`)
                                                .addField(`Cruise Altitude:`, `${cruiseAlt}`)
                                                .addField(`Flight Duration:`, ` ${duration}`)
                                                .addField(`Plane:`, `${plane}`)
                                                .addField(`Request Type:`, `${flRequest}`)
                                                .addField(`Callsign?`, '\u200B')
                                            const msg0 = await message.channel.send(Callsign);
                                            message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(async CALLsign => {
                                                let callsign = CALLsign.first();
                                                msg0.delete();
                                                CALLsign.first().delete();

                                                const confirmed = new Discord.MessageEmbed()
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                                    .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                                    .setTitle("Flight planner")
                                                    .setColor('#F1652C')
                                                    .setDescription(`This is your flight plan!`)
                                                    .addField('\u200B', '\u200B')
                                                    .addField(`Flight Crew:`, `${crewName}`)
                                                    .addField(`Rank:`, `${rank}`)
                                                    .addField(`Flight Hours:`, `${flHours}`)
                                                    .addField(`Departure:`, `${departure}`)
                                                    .addField(`Arrival:`, `${arrival}`)
                                                    .addField(`Cruise Altitude:`, `${cruiseAlt}`)
                                                    .addField(`Flight Duration:`, ` ${duration}`)
                                                    .addField(`Plane:`, `${plane}`)
                                                    .addField(`Request Type:`, `${flRequest}`)
                                                    .addField(`Callsign:`, `${callsign}`)
                                                let msg = message.channel.send(confirmed);



                                                const log = new Discord.MessageEmbed()
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                                    .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                                                    .setTitle("Flight planner Logs")
                                                    .setColor('#F1652C')
                                                    .setDescription(`Flight plan log`)
                                                    .addField('\u200B', '\u200B')
                                                    .addField(`Flight Crew:`, `${crewName}`)
                                                    .addField(`Rank:`, `${rank}`)
                                                    .addField(`Flight Hours:`, `${flHours}`)
                                                    .addField(`Departure:`, `${departure}`)
                                                    .addField(`Arrival:`, `${arrival}`)
                                                    .addField(`Cruise Altitude:`, `${cruiseAlt}`)
                                                    .addField(`Flight Duration:`, ` ${duration}`)
                                                    .addField(`Plane:`, `${plane}`)
                                                    .addField(`Request Type:`, `${flRequest}`)
                                                    .addField(`Callsign:`, `${callsign}`)

                                                channel.send(log);    
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
