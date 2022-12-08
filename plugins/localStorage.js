import createPersistedState from 'vuex-persistedstate';

export default ( { store } ) => {
    let storage = localStorage.getItem( 'bouquet' );

    // if ( storage && JSON.parse( storage ).current != 1 ) {
    //     localStorage.clear();
    // }

    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'bouquet',
            // paths: ['cart']
        } )( store )
    } )
}

// import createPersistedState from 'vuex-persistedstate'

// export default ({store}) => {
//   createPersistedState({
//     key: 'cart',
//     paths: ['cart']
//   })(store)
// }