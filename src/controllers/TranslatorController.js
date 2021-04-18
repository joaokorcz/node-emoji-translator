const emoji = require('node-emoji');

module.exports = {

    async translateSentence(request, response){

        const { sentence } = request.body;

        try{ 

            let translated = '';

            for (let i = 0; i < sentence.length; i++) {
                if (sentence[i] == 'p') {
                    translated += ':parking:';
                } else if (sentence[i] == 'a') {
                    translated += ':a:';
                } else if (sentence[i] == 't') {
                    translated += ':latin_cross:';
                } else if (sentence[i] == 'o') {
                    translated += ':o2:';
                } else if (sentence[i] == 'r') {
                    translated += ':registered:';
                } else if (sentence[i] == 'd') {
                    translated += ':leftwards_arrow_with_hook:';
                } else if (sentence[i] == 'c') {
                    translated += ':copyright:';
                } else if (sentence[i] == 'm') {
                    translated += ':scorpius:';
                } else if (sentence[i] == 'b') {
                    translated += ':b:';
                } else if (sentence[i] == 'i') {
                    translated += ':information:';
                } else if (sentence[i] == 'v') {
                    translated += ':aries:';
                } else if (sentence[i] == 'x') {
                    translated += ':x:';
                } else if (sentence[i] == 's') {
                    translated += ':heavy_dollar_sign:';
                } else if (sentence[i] == 'n') {
                    translated += ':capricorn:';
                } else if (sentence[i] == 'l') {
                    translated += ':call_me_hand:';
                } else if (sentence[i] == 'h') {
                    translated += ':pisces:';
                } else if (sentence[i] == 'u') {
                    translated += ':ophiuchus:';
                } else if (sentence[i] == 'j') {
                    translated += ':heavy_check_mark:';
                } else if (sentence[i] == 'z') {
                    translated += ':zzz:';
                } else if (sentence[i] == 'g') {
                    translated += ':cyclone:';
                } else if (sentence[i] == 'e') {
                    translated += ':three:';
                } else if (sentence[i] == 'w') {
                    translated += ':trident:';
                } else if (sentence[i] == 'f') {
                    translated += ':joker:';
                } else if (sentence[i] == 'k') {
                    translated += ':joker:';
                } else if (sentence[i] == 'q') {
                    translated += ':pretzel:';
                } else if (sentence[i] == 'y') {
                    translated += ':person_cartwheeling:';
                } else if (sentence[i] == '?') {
                    translated += ':question:';
                } else if (sentence[i] == ' ') {
                    translated += '\n\n'
                } else {
                    translated += sentence[i]
                }
            }
            translated = emoji.emojify(translated);

            return response.status(200).json({ translated: translated });
        
        } catch (error) {
            console.log(error);

            return response.status(400).json({ error: error });
        }
        
    }
}