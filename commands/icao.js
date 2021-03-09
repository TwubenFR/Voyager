module.exports = {
    name: "icao",
    description: "Icao command",
    execute(message, args, Discord, client) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTitle("ICAO & Airports Informations")
        .setColor('#F1652C')
        .setDescription(`This list shows ICAO codes and Airports Informations`)
        .addField( '\u200B', '\u200B')
        .addFields(
            { name: '**[ICAO CODES]**', value: '\u200B'},
            { name: '[JTPH]', value: "Tophon's Bridge International"},
            { name: '[JC04]', value: 'Connerview'},
            { name: '[JSLL]', value: 'Wellinsaul Square Internationa'},
            { name: '[JKDX]', value: 'Roi De Deloreau'},
        
            { name: '\u200B', value: '\u200B'},
        
            { name: '**[AIRPORT INFORMATIONS]**', value: '\u200B'},
            { name: '[JTPH] - Elevation AMSL: 2 ft', value: "Coordinates (X,Y): -1.8, 0.2 \n Medium Gates: 6 \n Large Gates: 10 \n Runways: 09L/27R, 09R/27L \n ILS: Yes"},
            { name: '[JC04] - Elevation AMSL: 2 ft', value: "Coordinates (X,Y): -9.1, 11.6 \n  Runways: 15/33 \n ILS: Yes"},
            { name: '[JSLL] - Elevation AMSL: 2 ft', value: "Coordinates: (X,Y): 25.6, 45.9 \n Small Stands: 4 \n Medium Stands: 6 \n Large Gates: 5 \n Runways: 04/22 \n ILS: Yes"},
            { name: '[JKDX] - Elevation AMSL: 2 ft', value: "Coordinates (X,Y): -65, -64.2 \n Medium Gates: 12 (C11-C22) \n Large Gates: 10 (A01-A05, B06-B10) \n Runways: 07/25, 15/33, 18L/36R, 18R/36L \n ILS: Yes"},
            
            
        );  
        message.channel.send(embed);
    }
}


