using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public IEnumerable<Evento> _evento = new Evento[]
    {
        new Evento()
        {
            EventoId = 1,
            Tema = "Angular 11 e .NET 6",
            Local = "Faro",
            Lote = "1º lote",
            QntPessoas = 250,
            DataEvento = DateTime.Now.AddDays(2).ToString(),
            ImagemURL = "foto.png"
        },
        new Evento()
        {
            EventoId = 2,
            Tema = "Angular e Suas Novidades",
            Local = "São Paulo",
            Lote = "2º lote",
            QntPessoas = 300,
            DataEvento = DateTime.Now.AddDays(2).ToString(),
            ImagemURL = "foto2.png"
        },
    };

    public EventoController()
    {
    }

     [HttpGet]
    public IEnumerable<Evento> Get()
    {
       return _evento;
    } 
    
    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
       return _evento.Where(x => x.EventoId == id);
    }
 /*
    [HttpGet]
    public Evento Get()
    {
       return new Evento
       {
            EventoId = 1,
            Tema = "Angular 11 e .NET 6",
            Local = "Faro",
            Lote = "1º lote",
            QntPessoas = 250,
            DataEvento = DateTime.Now.AddDays(2).ToString(),
            ImagemURL = "foto.png"
       };
    } */

    [HttpPost]
    public string Post()
    {
       return "Exemplo de post";
    }

    [HttpPut("{id}")]
    public string Put(int id)
    {
       return $"Exemplo de Put com id = {id}";
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
       return $"Exemplo de Delete com id = {id}";
    }
}
