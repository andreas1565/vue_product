module.exports = async function(app) {
  try {
    await app.listen(process.env.PORT);
    console.log('http server kører på port', process.env.PORT);
  } catch (error) {
    console.error(error);
    // denne  funktion sørger for at programmet lukker ordentligt 1 betyder luk programmet uden at gøre noget
    process.exit(1);
  }
};
