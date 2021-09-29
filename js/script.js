function consultaCep(){
  let cep = document.getElementById("cep").value;
  let url = "https://viacep.com.br/ws/" + cep + "/json/"
  console.log(url)
  $.ajax({
    url: url,
    type: "GET",
    success: function(res){
      console.log(res)
/*       console.log(res)
      $('#cep').html(res.cep);
      $('#logradouro').html(res.logradouro);
      $('#bairro').html(res.bairro);
      $('#localidade').html(res.localidade);
      $('#uf').html(res.uf); */

    }
  })
}