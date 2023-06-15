using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{    
   public readonly DataContext Context;

    public EventoController(DataContext context)
    {
            this.Context = context;
    }

    [HttpGet]
    public IEnumerable<Evento> Get() => Context.Eventos;

    [HttpGet("{id}")]
    public Evento GetById(int id) 
    {
        return Context.Eventos.FirstOrDefault(ev => ev.EventoId == id);

    }

    //public IEnumerable<Evento> GetById(int id) => Context.Eventos.Where(x => x.EventoId == id);

    [HttpPost]
    public string Post() => "Exemplo de post";

    [HttpPut("{id}")]
    public string Put(int id) => $"Exemplo de Put com id = {id}";

    [HttpDelete("{id}")]
    public string Delete(int id) => $"Exemplo de Delete com id = {id}";
}
