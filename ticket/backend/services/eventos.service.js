
async function listarEventos() {
  const { data, error } = await supabase
    .from('eventos')
    .select('*');

  if (error) throw error;

  return data;
}

async function criarEvento({ nome, data, preco }) {
  const { data: evento, error } = await supabase
    .from('eventos')
    .insert([{ nome, data, preco }])
    .select();

  if (error) throw error;

  return evento[0];
}

module.exports = {
  listarEventos,
  criarEvento
};