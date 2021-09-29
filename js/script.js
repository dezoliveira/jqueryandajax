function consultaCep(){
  let textCep = document.getElementById("text-cep").value;
  let url = "https://viacep.com.br/ws/" + textCep + "/json/"
  console.log(url)
  $.ajax({
    url: url,
    type: "GET",
    success: function(res){
      console.log(res)
      $('#cep').html(res.cep);
      $('#logradouro').html(res.logradouro);
      $('#bairro').html(res.bairro);
      $('#localidade').html(res.localidade);
      $('#uf').html(res.uf);
    }
  })
}

$(function(){
  $(".hide-data").hide();
});