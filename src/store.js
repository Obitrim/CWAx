
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({

    state: {
        notes: [
            {
                dueDate: '',
                type: 'welcome',
                title: 'Welcome',
                date: 'June 1, 2019',
                note: 'Note taking is one way to remember what you\'ve heard',
            }
        ],

        selectedNote: null
    },

    mutations: {

        /**
         * ##adds a new note to existing notes
         * 
         * @param { Object } state
         * @param { Object } note
         * 
         * @returns { undefined }
         */
        addNote( state, note ){
            state.notes.push( note );
        },

        /**
         * ##deletes an existing notes
         *
         * @param { Object } state
         * @param { Object } note
         *
         * @returns { undefined }
         */
        delete( state, note ){
            var noteIndex = state.notes.indexOf(note);
            state.notes.splice(noteIndex, 1);
        },


        /**
         * ## Opens window for reading note
         *
         * @param { Object } state
         * @param { Object } note
         *
         * @returns { undefined }
         */
        read( state, note ){
            console.log("store read note function");
        }
    },


});