Ext.application({
    name: 'Notes',

    views: ['NotesList'],
    models: ['Note'],
    stores: ['Notes'],

    launch: function() {
        //Ext.Viewport.add(Ext.create('Notes.view.NotesList'));
	var notesListView = { xtype: 'noteslistview' };
	Ext.Viewport.add([notesListView]);
    }
});
