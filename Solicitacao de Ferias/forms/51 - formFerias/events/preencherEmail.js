function preencherEmail(nome){
	var c1 = DatasetFactory.createConstraint("collegueName", nome, nome, ConstraintType.MUST);

	var dataset = DatasetFactory.getDataset("colleague",null, c1,null);
	
	for(var i = 0; i < c1.rowsCount; i++) {
    	seqnew = dataset.getValue(i, "mail"); 	
    	console.log('*** xxxGeraCodigoDocto - seqnew:' + seqnew);    	
    }	
	
	form.setValue('email', seqnew);
}