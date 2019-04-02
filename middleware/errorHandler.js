export default (err, req, res, next) => {
  if(err){
    console.log(err.message);
    res.status(400).send({'error': err.message});
  } else{
    next();
  }
}