const { createApp } = Vue;
createApp({
  data() {
    return {
      activeConctact: 0,
      newMessage: "",
      searchTextList: "",
      findConctact: [],
      frutta: ["mele", "banabe", "meloni"],
      contacts: [
        {
          name: "Michele",
          avatar: "./asset/img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./asset/img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./asset/img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./asset/img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./asset/img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./asset/img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./asset/img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./asset/img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //cambiare la chat
    changeChat(index) {
      this.activeConctact = index;
      console.log("this.findConctact", this.findConctact);
      console.log(this.activeConctact);
    },
    //mettere la classe al messaggio se è inviata o meno
    messageClass(activeConctact, index) {
      const conctactEl = this.contacts[activeConctact];
      const msgsClasses = conctactEl.messages.map((msgTex, index) => {
        if (msgTex.status === "received") {
          return { class: "message-received", id: index };
        } else {
          return { class: "message-sent", id: index };
        }
      });

      const msgClass = msgsClasses.find((classe) => {
        if (classe.id === index) {
          return classe;
        }
      });

      if (msgClass) {
        return msgClass.class;
      } else {
        return null;
      }
    },
    //scrivere messaggi
    sendMsg() {
      const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
      const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
      const dateAndTime = `${date} ${time}`;

      const newMessage = {
        date: dateAndTime,
        message: this.newMessage,
        status: "sent",
      };

      this.contacts[this.activeConctact].messages.push(newMessage);

      console.log("messaggi:", this.contacts[this.activeConctact].messages);
      this.newMessage = "";

      autoAnswer = setTimeout(this.cpuAnswer, 1000);
    },
    //risposta del cp
    cpuAnswer() {
      const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
      const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
      const dateAndTime = `${date} ${time}`;

      const newMessage = {
        date: dateAndTime,
        message: "ok",
        status: "received",
      };

      this.contacts[this.activeConctact].messages.push(newMessage);
      console.log("cpu:", this.contacts[this.activeConctact].messages);
    },
    //cercare i nomi nella lista della chat
    findChat() {
      /*  const filteredList = this.contacts.filter((chat) =>
        chat.name.toLowerCase().includes(this.$refs.input.value.toLowerCase())
      );
      console.log(this.findConctact);
      this.contacts = filteredList; */
      /* this.findConctact = this.contacts ; */
      return this.contacts.filter((conctact) =>
        conctact.name.toLowerCase().includes(this.searchTextList.toLowerCase())
      );
    },
    filtrareUtenti() {
      this.findConctact = this.findChat();
      console.log("this.findConctact", this.findConctact);
    },
  },
}).mount("#app");
