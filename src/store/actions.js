import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';
import graphQlService from '../api/graphql-service';
import getters from './getters';

export default {

    [actions.GET_USERS_LIST]({commit}, params= "_id username email") {
        commit(mutations.SET_LOADER, true);
        graphQlService.getUsersList(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.SET_USERS_LIST, response.data.users);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.ADD_USER]({commit}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.addUser(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.ADD_USER, response.data.addUser);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.DELETE_USER]({commit}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.deleteUser(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                console.log(response);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    }


};
