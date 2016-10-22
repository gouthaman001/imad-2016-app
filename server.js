var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
  'article-one':{
    title:'ARTICLE ONE-BY GOUTHAMAN',
    heading:'ARTICLE ONE',
    date:' OCT 22,2016',
    content:`<p>
             this is basically a useless para for the coding i practisce
         </p>
         <p>
             blah blah blah
         </p>
         <p>
             thank you! for reading this useless code.thank you! for reading this useless code.thank you! for reading this useless code.
             thank you! for reading this useless code
         </p>`
         
  },
   'article-two':{
    title:'ARTICLE TWO-BY GOUTHAMAN',
    heading:'ARTICLE TWO',
    date:' OCT 22,2016',
    content:`<p>
             this is basically a useless para for the coding i practisce
         </p>
         <p>
             blah blah blah
         </p>
         <p>
             thank you! for reading this useless code.thank you! for reading this useless code.thank you! for reading this useless code.
             thank you! for reading this useless code
         </p>`
         
   },
   'article-three':{
    title:'ARTICLE THREE-BY GOUTHAMAN',
    heading:'ARTICLE THREE',
    date:' OCT 22,2016',
    content:`<p>
             this is basically a useless para for the coding i practisce
         </p>
         <p>
             blah blah blah
         </p>
         <p>
             thank you! for reading this useless code.thank you! for reading this useless code.thank you! for reading this useless code.
             thank you! for reading this useless code
         </p>`
         
   }
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate=`
<!doctype html>
    <head>
        <TITLE>
            $(title)
        </TITLE>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
 <body>
   <div class="box">
     <hr/>
     <h3>
        $(heading)
     </h3>
     <DIV>
         $(date)
     </DIV>
     <div>
         $(content)
     </div>
  </div>   
 </body>
</html>`;
return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName',function(req,res){
   var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
