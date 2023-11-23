
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"
  ) {
    document.getElementById("enigma0-check").style = "display: block";
    document.getElementById("enigma0-no-check").style = "display: none";
  } else {
    document.getElementById("enigma0-no-check").style = "display: block";
    document.getElementById("enigma0-check").style = "display: none";
    document.getElementById("password0").value = "";
  }
  final_code();
}

checkPassword0();


function checkPassword1() {
  var password = document.getElementById("password1").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"
  ) {
    document.getElementById("enigma1-check").style = "display: block";
    document.getElementById("enigma1-no-check").style = "display: none";
  } else {
    document.getElementById("enigma1-no-check").style = "display: block";
    document.getElementById("enigma1-check").style = "display: none";
    document.getElementById("password1").value = "";
  }
  final_code();
}

checkPassword1();


function checkPassword2() {
  var password = document.getElementById("password2").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "71ee45a3c0db9a9865f7313dd3372cf60dca6479d46261f3542eb9346e4a04d6"
  ) {
    document.getElementById("enigma2-check").style = "display: block";
    document.getElementById("enigma2-no-check").style = "display: none";
  } else {
    document.getElementById("enigma2-no-check").style = "display: block";
    document.getElementById("enigma2-check").style = "display: none";
    document.getElementById("password2").value = "";
  }
  final_code();
}

checkPassword2();


function checkPassword3() {
  var password = document.getElementById("password3").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "d44adfd7777aea2a20eff9eb1177255586f385606c72659f9e93a914c8d1314d"
  ) {
    document.getElementById("enigma3-check").style = "display: block";
    document.getElementById("enigma3-no-check").style = "display: none";
  } else {
    document.getElementById("enigma3-no-check").style = "display: block";
    document.getElementById("enigma3-check").style = "display: none";
    document.getElementById("password3").value = "";
  }
  final_code();
}

checkPassword3();


function checkPassword4() {
  var password = document.getElementById("password4").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "349c41201b62db851192665c504b350ff98c6b45fb62a8a2161f78b6534d8de9"
  ) {
    document.getElementById("enigma4-check").style = "display: block";
    document.getElementById("enigma4-no-check").style = "display: none";
  } else {
    document.getElementById("enigma4-no-check").style = "display: block";
    document.getElementById("enigma4-check").style = "display: none";
    document.getElementById("password4").value = "";
  }
  final_code();
}

checkPassword4();


function checkPassword5() {
  var password = document.getElementById("password5").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "9165944995a150430ff5ee6ee2316d62e8bdfe29293e5695124f6c2ba33bf0d2"
  ) {
    document.getElementById("enigma5-check").style = "display: block";
    document.getElementById("enigma5-no-check").style = "display: none";
  } else {
    document.getElementById("enigma5-no-check").style = "display: block";
    document.getElementById("enigma5-check").style = "display: none";
    document.getElementById("password5").value = "";
  }
  final_code();
}

checkPassword5();


function checkPassword6() {
  var password = document.getElementById("password6").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "c18d4cbad6a778b727bac4c7572a747cf105ad959e684f3d3c123d3e4071a5ca"
  ) {
    document.getElementById("enigma6-check").style = "display: block";
    document.getElementById("enigma6-no-check").style = "display: none";
  } else {
    document.getElementById("enigma6-no-check").style = "display: block";
    document.getElementById("enigma6-check").style = "display: none";
    document.getElementById("password6").value = "";
  }
  final_code();
}

checkPassword6();


function checkPassword7() {
  var password = document.getElementById("password7").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "bfeba72809b75fd51f3e3042aa0217242491aa9df02f30878d9b50182df60c66"
  ) {
    document.getElementById("enigma7-check").style = "display: block";
    document.getElementById("enigma7-no-check").style = "display: none";
  } else {
    document.getElementById("enigma7-no-check").style = "display: block";
    document.getElementById("enigma7-check").style = "display: none";
    document.getElementById("password7").value = "";
  }
  final_code();
}

checkPassword7();

