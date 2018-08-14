var State = {
    browseList: [
	    {__model__: "Ref", type: "directory", name: "Files", uri: "file:///var/lib/mopidy"},
	    {__model__: "Ref", type: "directory", name: "Local media", uri: "local:directory"}
    ],

    playlists: [],

    history: [
	    {__model__: "Ref", type: "directory", name: "Files", uri: "file:///var/lib/mopidy"},
	    {__model__: "Ref", type: "directory", name: "Local media", uri: "local:directory"}
    ]
}

export {State};