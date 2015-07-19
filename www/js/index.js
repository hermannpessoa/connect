/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        checkConnection();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// Inicia os trabalhos no App [1 = conectado / 0 = desconectado]

function startApp(){
    alert('status da conexão: ' + conectado);
    checkLogged();
    checkStatus();

    if(conectado == 1){ // verifica se estou logado
        if(logged == 1 && status == 1){
            // do logged things
        }else{
            // do dislogged things
        }
    }else{ //verifica se estou deslogado

    }
}

// Verifica se o Usuário ja esteve logado na plataforma
function checkLogged(){
     if(localStorage.getItem('logged') !== 1){
        alert('Não estou logado')
        logged = 0;
    }else{
        alert('Já estou logado')
        logged = 1;
    }
}

function checkStatus(){
     if(localStorage.getItem('status') !== 1){
        alert('Não estou ativo')
        status = 0;
    }else{
        alert('Já estou ativo')
        status = 1;
    }
}

// Verifica se o Usuário está conectado a internet
function checkConnection() {
    alert('Chegamos 1')
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown';
    states[Connection.ETHERNET] = 'conected';
    states[Connection.WIFI]     = 'conected';
    states[Connection.CELL_2G]  = 'conected';
    states[Connection.CELL_3G]  = 'conected';
    states[Connection.CELL_4G]  = 'conected';
    states[Connection.CELL]     = 'conected';
    states[Connection.NONE]     = 'disconected';

    if(states[networkState] == 'disconected'){
        // alert('Connection type: ' + states[networkState]);
        conectado = 0;
    }else{
        // alert('CONECATO, Foda-se em qual tipo =]');
        conectado = 1;
    }
    startApp();
}
