const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://purshotam_8210:<purshotam_8210>@cluster0.w275e.mongodb.net/wedapi?retryWrites=true&w=majority',{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( ()=>console.log('database connected!'))
.catch(err=>console.log(err));