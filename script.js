$(document).ready(() => {
   var contact_name = "";
   var contact_email = "";
   var contact_message = "";
   $('#terminal').terminal({
      open: function (value) {
         this.echo('Hello, My name is "Tejas Magade"')
         this.echo(value);
         this.exec([
            'git clone https://github.com/jcubic/jquery.terminal.git',
            'cd jquery.terminal',
            'git checkout devel'
         ]);
      },
      sub: {
         get: function (arg) {
         }
      },
      add: function (arg1, arg2) {
         ans = Number(arg1 + arg2)
         this.echo("Addition of " + arg1 + " and " + arg2 + " is [[b;yellow;]" + ans + "]");
      },
      sub: function (arg1, arg2) {
         ans = Number(arg1 - arg2)
         this.echo("Subtraction of " + arg1 + " and " + arg2 + " is [[b;yellow;]" + ans + "]");
      },
      mult: function (arg1, arg2) {
         ans = Number(arg1 * arg2)
         this.echo("Multiplication of " + arg1 + " and " + arg2 + " is [[b;yellow;]" + ans + "]");
      },
      div: function (arg1, arg2) {
         ans = Number(arg1 / arg2)
         this.echo("Division of " + arg1 + " and " + arg2 + " is [[b;yellow;]" + ans + "]");
      },
      name: function () {
         // setTimeout(()=>{
         //     this.echo('Hello, My name is "Tejas Magade"');
         // }, 3000);
         this.echo(`Hello, My name is [[b;yellow;]Tejas Magade], What's your name?`);
         this.read('Enter your Name here: ', vis_name => {
            // this.echo('Hello, ' + vis_name);
            this.echo("Hello, " + '[[b;yellow;]' + vis_name + ']' + "! How are you? ");
         });
      },
      whoami: function () {
         this.echo(`Hello, My name is Tejas Magade. I am a Software Engineer. I am currently pursuing a degree in Information Technology Engineering. I love to write code & I am very passionate about web development. I learned all the basics of web development and I am learning the new technologies. I also 💛 to explore new programming languages. Currently, I was working on some new cool projects.
`)
      },
      ls: function () {
         this.echo(`01004901    [[b;lightgreen;]Blog]
01500020    Documents
02600110    [[b;lightgreen;]Downloads]
00030021    [[b;lightgreen;]Pictures]
59000101    Music
30000028    Videos
02991000    Porn
02762001    [[b;lightgreen;]LISCENCE]
91000494    README.md

Note:- This is just for fun this is not a real directories/machine.
           `);
      },
      help: function () {
         this.echo(`Available Commands:
   [[b;orange;]whoami] - to read something about me
   [[b;orange;]contact] - to read something about me
   [[b;orange;]name] - to see my name
   [[b;orange;]help] - to see the commands available on this machine       
   [[b;orange;]ls] - to see resources on this machine (Note: just for fun)
   [[b;orange;]clear] - to clear the terminal 
   [[b;orange;]add ][[b;white;]number1 number2] - to add given two numbers as arguments
   [[b;orange;]sub ][[b;white;]number1 number2] - to subtract given two numbers as arguments
   [[b;orange;]mult ][[b;white;]number1 number2] - to multiply given two numbers as arguments
   [[b;orange;]div ][[b;white;]number1 number2] - to divide given two numbers as arguments
            `)
      },
      contact: function () {
         this.echo("")
      }
   }, {
      name: 'Tejas Magade',
      prompt: '[[b;lightblue;]tejas_magade]> ',
      // width: 3000,
      // height: 4000,
      greetings: greetings.innerHTML,
   });
})