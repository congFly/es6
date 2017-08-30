import yargs from 'yargs';

//区分是开发环境还是线上环境
const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all script'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log',
    })

    .option('sourcemaps',{
        describe:'force the creation of sroucemaps'
    })

    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv