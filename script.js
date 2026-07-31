
        /* =========================================
           1. DATA DECLARATION (Déclaration depuis le script)
           ========================================= */
        const guests = [
            //Table 1 - QUARTZ
            { id: 1, firstName: "Jean-Pierre", lastName: "Kambila", gender: "M", tableNumber: 1, tableName: "QUARTZ", status: "Couple", state: "waiting" },
            { id: 2, firstName: "Mathieu", lastName: "Lindjandja", gender: "M", tableNumber: 1, tableName: "QUARTZ", status: "Couple", state: "waiting" },
            { id: 3, firstName: "Bapuis", lastName: "Ekomozele", gender: "M", tableNumber: 1, tableName: "QUARTZ", status: "Couple", state: "waiting" },
            { id: 4, firstName: "Charles", lastName: "Kambila", gender: "M", tableNumber: 1, tableName: "QUARTZ", status: "Couple", state: "waiting" },
            { id: 5, firstName: "Nathalie", lastName: "Kasese", gender: "F", tableNumber: 1, tableName: "QUARTZ", status: "Mr", state: "waiting" },
            { id: 6, firstName: "Mathilde", lastName: "Kasese", gender: "F", tableNumber: 1, tableName: "QUARTZ", status: "Couple", state: "waiting" },
            { id: 7, firstName: "Aimé", lastName: "Etelembongo", gender: "M", tableNumber: 1, tableName: "QUARTZ", status: "Couple", state: "waiting" },

                    //Table 2 - TOPAZA
            { id: 8, firstName: "Christian", lastName: "Mulombela", gender: "N/A", tableNumber: 2, tableName: "TOPAZA", status: "Couple", state: "waiting" },
            { id: 9, firstName: "Ghislain", lastName: "Baende", gender: "N/A", tableNumber: 2, tableName: "TOPAZA", status: "Couple", state: "waiting" },
            { id: 10, firstName: "Christian", lastName: "Mukayonde", gender: "N/A", tableNumber: 2, tableName: "TOPAZA", status: "Couple", state: "waiting" },
            { id: 11, firstName: "Monsieur Elie", lastName: "Kabeya", gender: "M", tableNumber: 2, tableName: "TOPAZA", status: "Mr", state: "waiting" },
            { id: 12, firstName: "Madame Judith", lastName: "Banza", gender: "F", tableNumber: 2, tableName: "TOPAZA", status: "Mme", state: "waiting" },
            { id: 13, firstName: "Monsieur Patrick", lastName: "Luvuezo", gender: "M", tableNumber: 2, tableName: "TOPAZA", status: "Mr", state: "waiting" },
            { id: 14, firstName: "Monsieur Herman", lastName: "Pelenda", gender: "M", tableNumber: 2, tableName: "TOPAZA", status: "Mr", state: "waiting" },
            { id: 15, firstName: "Célestin", lastName: "Kabasele", gender: "N/A", tableNumber: 2, tableName: "TOPAZA", status: "Couple", state: "waiting" },

            //Table 3 - ONYX
            { id: 16, firstName: "Liévin", lastName: "Kasese", gender: "N/A", tableNumber: 3, tableName: "ONYX", status: "Couple", state: "waiting" },
            { id: 17, firstName: "Noël", lastName: "Musingiel", gender: "N/A", tableNumber: 3, tableName: "ONYX", status: "Couple", state: "waiting" },
            { id: 18, firstName: "Madame Véronique", lastName: "Iwele", gender: "F", tableNumber: 3, tableName: "ONYX", status: "Mme", state: "waiting" },
            { id: 19, firstName: "Madame Félicité", lastName: "Kalabudi", gender: "F", tableNumber: 3, tableName: "ONYX", status: "Mme", state: "waiting" },
            { id: 20, firstName: "Kufwa", lastName: "", gender: "N/A", tableNumber: 3, tableName: "ONYX", status: "Mr", state: "waiting" },
            { id: 21, firstName: "Couple Garry", lastName: "Iwele", gender: "N/A", tableNumber: 3, tableName: "ONYX", status: "Couple", state: "waiting" },
            { id: 22, firstName: "Sœur Florence", lastName: "Mbiya", gender: "F", tableNumber: 3, tableName: "ONYX", status: "Mme", state: "waiting" },
            { id: 23, firstName: "Madame Ambrosine", lastName: "Kufwa", gender: "F", tableNumber: 3, tableName: "ONYX", status: "Mme", state: "waiting" },
            { id: 24, firstName: "Madame Divine", lastName: "Kapeta", gender: "F", tableNumber: 3, tableName: "ONYX", status: "Mme", state: "waiting" },

            //Table 4 - JADE
            { id: 25, firstName: "Joël", lastName: "Mundadi", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },
            { id: 26, firstName: "Maxime", lastName: "Selemani", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },
            { id: 27, firstName: "Jean Max", lastName: "Mayaka", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },
            { id: 28, firstName: "Olivier", lastName: "Katuala", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },
            { id: 29, firstName: "Tharcisse", lastName: "Nzongia", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },
            { id: 30, firstName: "Sasa", lastName: "", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },
            { id: 31, firstName: "Serge", lastName: "Mubilulu", gender: "N/A", tableNumber: 4, tableName: "JADE", status: "Couple", state: "waiting" },

            //Table 5 - AMBRE
            { id: 32, firstName: "Valentin", lastName: "Inka", gender: "N/A", tableNumber: 5, tableName: "AMBRE", status: "Couple", state: "waiting" },
            { id: 33, firstName: "Madame Lysette", lastName: "Kiwongi", gender: "F", tableNumber: 5, tableName: "AMBRE", status: "Mme", state: "waiting" },
            { id: 34, firstName: "Madame Plamedie", lastName: "Mbuwa", gender: "F", tableNumber: 5, tableName: "AMBRE", status: "Mme", state: "waiting" },
            { id: 35, firstName: "Madame Safi", lastName: "Mongengo", gender: "F", tableNumber: 5, tableName: "AMBRE", status: "Mme", state: "waiting" },
            { id: 36, firstName: "Madame Cynthia", lastName: "Bemi", gender: "F", tableNumber: 5, tableName: "AMBRE", status: "Mme", state: "waiting" },
            { id: 37, firstName: "Monsieur Moïse", lastName: "Kilolo", gender: "M", tableNumber: 5, tableName: "AMBRE", status: "Mr", state: "waiting" },
            { id: 38, firstName: "Monsieur Emmanuel", lastName: "Ntoto", gender: "M", tableNumber: 5, tableName: "AMBRE", status: "Mr", state: "waiting" },
            { id: 39, firstName: "Madame Adolphine", lastName: "", gender: "F", tableNumber: 5, tableName: "AMBRE", status: "Mme", state: "waiting" },
            { id: 40, firstName: "Monsieur Murphy", lastName: "Kulonga", gender: "M", tableNumber: 5, tableName: "AMBRE", status: "Mr", state: "waiting" },
            { id: 41, firstName: "Christian", lastName: "Nyamabu", gender: "N/A", tableNumber: 5, tableName: "AMBRE", status: "Couple", state: "waiting" },

            //Table 6 - MARBRE
            { id: 42, firstName: "Madame Jacquie", lastName: "Walo", gender: "F", tableNumber: 6, tableName: "MARBRE", status: "Mme", state: "waiting" },
            { id: 43, firstName: "Madame Shelanie", lastName: "", gender: "F", tableNumber: 6, tableName: "MARBRE", status: "Mme", state: "waiting" },
            { id: 44, firstName: "Noël", lastName: "Kambila", gender: "N/A", tableNumber: 6, tableName: "MARBRE", status: "Couple", state: "waiting" },
            { id: 45, firstName: "Madame Honorine", lastName: "Kambila", gender: "F", tableNumber: 6, tableName: "MARBRE", status: "Mme", state: "waiting" },
            { id: 46, firstName: "Claude", lastName: "Etelembongo", gender: "N/A", tableNumber: 6, tableName: "MARBRE", status: "Couple", state: "waiting" },
            { id: 47, firstName: "Kangufu", lastName: "", gender: "N/A", tableNumber: 6, tableName: "MARBRE", status: "Couple", state: "waiting" },

            //Table 7 - BASALTE
            { id: 48, firstName: "Madame Betty", lastName: "Bengama", gender: "F", tableNumber: 7, tableName: "BASALTE", status: "Mme", state: "waiting" },
            { id: 49, firstName: "Madame Déborah", lastName: "Mangili", gender: "F", tableNumber: 7, tableName: "BASALTE", status: "Mme", state: "waiting" },
            { id: 50, firstName: "Monsieur Maurice", lastName: "Kiala", gender: "M", tableNumber: 7, tableName: "BASALTE", status: "Mr", state: "waiting" },
            { id: 51, firstName: "Isaac", lastName: "Nyembo", gender: "N/A", tableNumber: 7, tableName: "BASALTE", status: "Couple", state: "waiting" },
            { id: 52, firstName: "Monsieur Fils", lastName: "Kazadi", gender: "M", tableNumber: 7, tableName: "BASALTE", status: "Mr", state: "waiting" },
            { id: 53, firstName: "Monsieur Junior", lastName: "Tshimanga", gender: "M", tableNumber: 7, tableName: "BASALTE", status: "Mr", state: "waiting" },
            { id: 54, firstName: "Madame Olga", lastName: "Manswala", gender: "F", tableNumber: 7, tableName: "BASALTE", status: "Mme", state: "waiting" },
            { id: 55, firstName: "Hervé", lastName: "Ntumba", gender: "N/A", tableNumber: 7, tableName: "BASALTE", status: "Couple", state: "waiting" },
            { id: 56, firstName: "Madame Plamedie", lastName: "Mabaya", gender: "F", tableNumber: 7, tableName: "BASALTE", status: "Mme", state: "waiting" },
            { id: 57, firstName: "Madame Lydie", lastName: "Malhe", gender: "F", tableNumber: 7, tableName: "BASALTE", status: "Mme", state: "waiting" },

            //Table 8 - GRANITE
            { id: 58, firstName: "Déo", lastName: "Mutala", gender: "N/A", tableNumber: 8, tableName: "GRANITE", status: "Couple", state: "waiting" },
            { id: 59, firstName: "Derrick", lastName: "Omokoko", gender: "N/A", tableNumber: 8, tableName: "GRANITE", status: "Couple", state: "waiting" },
            { id: 60, firstName: "Monsieur Marcel", lastName: "Odister", gender: "M", tableNumber: 8, tableName: "GRANITE", status: "Mr", state: "waiting" },
            { id: 61, firstName: "Pulusi", lastName: "", gender: "N/A", tableNumber: 8, tableName: "GRANITE", status: "Couple", state: "waiting" },
            { id: 62, firstName: "Dr Aubin", lastName: "", gender: "N/A", tableNumber: 8, tableName: "GRANITE", status: "Couple", state: "waiting" },
            { id: 63, firstName: "Madame Sandra", lastName: "Muzimi", gender: "F", tableNumber: 8, tableName: "GRANITE", status: "Mme", state: "waiting" },
            { id: 64, firstName: "Jean Denis", lastName: "Nyongoni", gender: "N/A", tableNumber: 8, tableName: "GRANITE", status: "Couple", state: "waiting" },

            //Table 9 - EDITHO
            { id: 65, firstName: "Lungala", lastName: "Gauthier", gender: "N/A", tableNumber: 9, tableName: "EDITHO", status: "Couple", state: "waiting" },
            { id: 66, firstName: "Tshiaba", lastName: "Benoit", gender: "N/A", tableNumber: 9, tableName: "EDITHO", status: "Couple", state: "waiting" },
            { id: 67, firstName: "Freddy", lastName: "Ngengele", gender: "N/A", tableNumber: 9, tableName: "EDITHO", status: "Couple", state: "waiting" },
            { id: 68, firstName: "Modeste", lastName: "Neppa", gender: "N/A", tableNumber: 9, tableName: "EDITHO", status: "Couple", state: "waiting" },
            { id: 69, firstName: "Beya", lastName: "Nyengele", gender: "N/A", tableNumber: 9, tableName: "EDITHO", status: "Couple", state: "waiting" },
            { id: 70, firstName: "Ghomalie", lastName: "Pay", gender: "N/A", tableNumber: 9, tableName: "EDITHO", status: "Couple", state: "waiting" },

            //Table 10 - INFLUANCE
            { id: 71, firstName: "Merveille", lastName: "Kizemba", gender: "F", tableNumber: 10, tableName: "INFLUANCE", status: "Mme", state: "waiting" },
            { id: 72, firstName: "Bel'Amour", lastName: "Mukum", gender: "F", tableNumber: 10, tableName: "INFLUANCE", status: "Mme", state: "waiting" },
            { id: 73, firstName: "Naomi", lastName: "Kalonda", gender: "F", tableNumber: 10, tableName: "INFLUANCE", status: "Mme", state: "waiting" },
            { id: 74, firstName: "Therese", lastName: "Kamku", gender: "N/A", tableNumber: 10, tableName: "INFLUANCE", status: "Couple", state: "waiting" },
            { id: 75, firstName: "Ja El", lastName: "Betu", gender: "M", tableNumber: 10, tableName: "INFLUANCE", status: "Mr", state: "waiting" },
            { id: 76, firstName: "Louvain", lastName: "Bulungu", gender: "N/A", tableNumber: 10, tableName: "INFLUANCE", status: "Couple", state: "waiting" },
            { id: 77, firstName: "Ruth", lastName: "Kendal", gender: "F", tableNumber: 10, tableName: "INFLUANCE", status: "Mme", state: "waiting" },
            { id: 78, firstName: "Emeraude", lastName: "Kangu", gender: "F", tableNumber: 10, tableName: "INFLUANCE", status: "Mme", state: "waiting" },
            { id: 79, firstName: "Ange", lastName: "Kizemba", gender: "F", tableNumber: 10, tableName: "INFLUANCE", status: "Mme", state: "waiting" },
            { id: 80, firstName: "Salo Mon", lastName: "Bambi", gender: "M", tableNumber: 10, tableName: "INFLUANCE", status: "Mr", state: "waiting" },

            //Table 11 - VISION
            { id: 81, firstName: "Gabriel", lastName: "", gender: "N/A", tableNumber: 11, tableName: "VISION", status: "Couple", state: "waiting" },
            { id: 82, firstName: "Nyengele", lastName: "Rene", gender: "N/A", tableNumber: 11, tableName: "VISION", status: "Couple", state: "waiting" },
            { id: 83, firstName: "Pascaline", lastName: "Tshiamala", gender: "F", tableNumber: 11, tableName: "VISION", status: "Mme", state: "waiting" },
            { id: 84, firstName: "Nyengele", lastName: "Paul", gender: "N/A", tableNumber: 11, tableName: "VISION", status: "Couple", state: "waiting" },
            { id: 85, firstName: "Junior", lastName: "Nyengele", gender: "N/A", tableNumber: 11, tableName: "VISION", status: "Couple", state: "waiting" },
            { id: 86, firstName: "Kapuku", lastName: "", gender: "N/A", tableNumber: 11, tableName: "VISION", status: "Couple", state: "waiting" },

            //Table 12 - ELOQUANCE
            { id: 87, firstName: "Hugor", lastName: "Kapuku", gender: "N/A", tableNumber: 12, tableName: "ELOQUANCE", status: "Couple", state: "waiting" },
            { id: 88, firstName: "David", lastName: "", gender: "M", tableNumber: 12, tableName: "ELOQUANCE", status: "Mr", state: "waiting" },
            { id: 89, firstName: "Clau", lastName: "Vis", gender: "N/A", tableNumber: 12, tableName: "ELOQUANCE", status: "Couple", state: "waiting" },
            { id: 90, firstName: "Drania", lastName: "", gender: "F", tableNumber: 12, tableName: "ELOQUANCE", status: "Mme", state: "waiting" },
            { id: 91, firstName: "Yvonne", lastName: "", gender: "F", tableNumber: 12, tableName: "ELOQUANCE", status: "Mme", state: "waiting" },
            { id: 92, firstName: "Christian", lastName: "Senat", gender: "M", tableNumber: 12, tableName: "ELOQUANCE", status: "Mr", state: "waiting" },
            { id: 93, firstName: "Titi", lastName: "", gender: "F", tableNumber: 12, tableName: "ELOQUANCE", status: "Mme", state: "waiting" },
            { id: 94, firstName: "Elysees", lastName: "", gender: "N/A", tableNumber: 12, tableName: "ELOQUANCE", status: "Couple", state: "waiting" },
            { id: 95, firstName: "Christian", lastName: "Debora", gender: "M", tableNumber: 12, tableName: "ELOQUANCE", status: "Mr", state: "waiting" },

            //Table 13 - RAYONNEMENT
            { id: 96, firstName: "Abbé Sam", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 97, firstName: "Père Kevin", lastName: "Kupe", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 98, firstName: "Père Athanase", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 99, firstName: "Père Emmanuel", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 100, firstName: "Therese", lastName: "Tabu", gender: "F", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mme", state: "waiting" },
            { id: 101, firstName: "Père Dosite", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 102, firstName: "Père Cedrick", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 103, firstName: "Père Ferdinama", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 104, firstName: "Père Cleoface", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },
            { id: 105, firstName: "Mwaninayi", lastName: "", gender: "N/A", tableNumber: 13, tableName: "RAYONNEMENT", status: "Couple", state: "waiting" },
            { id: 106, firstName: "Abbé Kevin", lastName: "", gender: "M", tableNumber: 13, tableName: "RAYONNEMENT", status: "Mr", state: "waiting" },

            //Table 14 - DIALOGUE
            { id: 107, firstName: "Kabamba", lastName: "Ngidu", gender: "M", tableNumber: 14, tableName: "DIALOGUE", status: "Mr", state: "waiting" },
            { id: 108, firstName: "Tshin Keke", lastName: "Mukinayi", gender: "N/A", tableNumber: 14, tableName: "DIALOGUE", status: "Couple", state: "waiting" },
            { id: 109, firstName: "Ka", lastName: "Nyungatina", gender: "M", tableNumber: 14, tableName: "DIALOGUE", status: "Mr", state: "waiting" },
            { id: 110, firstName: "Ester", lastName: "Bieleli", gender: "N/A", tableNumber: 14, tableName: "DIALOGUE", status: "Couple", state: "waiting" },
            { id: 111, firstName: "Mpaka", lastName: "", gender: "N/A", tableNumber: 14, tableName: "DIALOGUE", status: "Couple", state: "waiting" },
            { id: 112, firstName: "Alain", lastName: "Kadima", gender: "N/A", tableNumber: 14, tableName: "DIALOGUE", status: "Couple", state: "waiting" },
            { id: 113, firstName: "Gautier", lastName: "Tshitenge", gender: "M", tableNumber: 14, tableName: "DIALOGUE", status: "Mr", state: "waiting" },
            
            //Table 15 - IMAGE
            { id: 114, firstName: "Harmonie", lastName: "", gender: "F", tableNumber: 15, tableName: "IMAGE", status: "Mme", state: "waiting" },
            { id: 115, firstName: "Grace", lastName: "Safi", gender: "F", tableNumber: 15, tableName: "IMAGE", status: "Mme", state: "waiting" },
            { id: 116, firstName: "Gemima", lastName: "Kabongo", gender: "F", tableNumber: 15, tableName: "IMAGE", status: "Mme", state: "waiting" },
            { id: 117, firstName: "Dan", lastName: "", gender: "M", tableNumber: 15, tableName: "IMAGE", status: "Mr", state: "waiting" },
            { id: 118, firstName: "Jonathan", lastName: "Imbu", gender: "M", tableNumber: 15, tableName: "IMAGE", status: "Mr", state: "waiting" },
            { id: 119, firstName: "Bomune", lastName: "", gender: "M", tableNumber: 15, tableName: "IMAGE", status: "Mr", state: "waiting" },
            { id: 120, firstName: "Bahati", lastName: "", gender: "M", tableNumber: 15, tableName: "IMAGE", status: "Mr", state: "waiting" },
            { id: 121, firstName: "Divine", lastName: "Kapinga", gender: "F", tableNumber: 15, tableName: "IMAGE", status: "Mme", state: "waiting" },
            { id: 122, firstName: "Anelka", lastName: "", gender: "N/A", tableNumber: 15, tableName: "IMAGE", status: "Couple", state: "waiting" },
            { id: 123, firstName: "Gilda", lastName: "", gender: "F", tableNumber: 15, tableName: "IMAGE", status: "Mme", state: "waiting" },
            { id: 124, firstName: "Mignon", lastName: "", gender: "F", tableNumber: 15, tableName: "IMAGE", status: "Mme", state: "waiting" },

            //Table 16 - AUDIANCE
            { id: 125, firstName: "Mande", lastName: "", gender: "N/A", tableNumber: 16, tableName: "AUDIANCE", status: "Couple", state: "waiting" },
            { id: 126, firstName: "Kizemba", lastName: "", gender: "N/A", tableNumber: 16, tableName: "AUDIANCE", status: "Couple", state: "waiting" },
            { id: 127, firstName: "Dr", lastName: "Kabongo", gender: "N/A", tableNumber: 16, tableName: "AUDIANCE", status: "Couple", state: "waiting" },
            { id: 128, firstName: "Felicite", lastName: "", gender: "F", tableNumber: 16, tableName: "AUDIANCE", status: "Mme", state: "waiting" },
            { id: 129, firstName: "Jean Claude", lastName: "", gender: "M", tableNumber: 16, tableName: "AUDIANCE", status: "Mr", state: "waiting" },
            { id: 130, firstName: "Mambungi", lastName: "", gender: "N/A", tableNumber: 16, tableName: "AUDIANCE", status: "Couple", state: "waiting" },
            { id: 131, firstName: "Mwadi", lastName: "Josephine", gender: "F", tableNumber: 16, tableName: "AUDIANCE", status: "Mme", state: "waiting" },
            { id: 132, firstName: "Jose", lastName: "Taniel", gender: "M", tableNumber: 16, tableName: "AUDIANCE", status: "Mr", state: "waiting" },

            //Table 17 - ATLAS
            { id: 133, firstName: "Mfumu", lastName: "Mbongo", gender: "N/A", tableNumber: 17, tableName: "ATLAS", status: "Couple", state: "waiting" },
            { id: 134, firstName: "Kapita", lastName: "", gender: "N/A", tableNumber: 17, tableName: "ATLAS", status: "Couple", state: "waiting" },
            { id: 135, firstName: "Murandi", lastName: "", gender: "N/A", tableNumber: 17, tableName: "ATLAS", status: "Couple", state: "waiting" },
            { id: 136, firstName: "Kerene et Raphaella", lastName: "", gender: "F", tableNumber: 17, tableName: "ATLAS", status: "Mme", state: "waiting" },

            //Table 18 - VOIX
            { id: 137, firstName: "Ekume", lastName: "", gender: "M", tableNumber: 18, tableName: "VOIX", status: "Mr", state: "waiting" },
            { id: 138, firstName: "Kabamba", lastName: "Christian", gender: "M", tableNumber: 18, tableName: "VOIX", status: "Mr", state: "waiting" },
            { id: 139, firstName: "Tabtah", lastName: "", gender: "M", tableNumber: 18, tableName: "VOIX", status: "Mr", state: "waiting" },
            { id: 140, firstName: "Benie", lastName: "Nsimba", gender: "F", tableNumber: 18, tableName: "VOIX", status: "Mme", state: "waiting" },
            { id: 141, firstName: "Moza", lastName: "", gender: "N/A", tableNumber: 18, tableName: "VOIX", status: "Couple", state: "waiting" },
            { id: 142, firstName: "Mongombe", lastName: "", gender: "N/A", tableNumber: 18, tableName: "VOIX", status: "Couple", state: "waiting" },
            { id: 143, firstName: "Groupe KA 2", lastName: "", gender: "N/A", tableNumber: 18, tableName: "VOIX", status: "Couple", state: "waiting" },
            { id: 144, firstName: "Priscile", lastName: "Futi", gender: "F", tableNumber: 18, tableName: "VOIX", status: "Mme", state: "waiting" },
            { id: 145, firstName: "Noel", lastName: "Mwadi", gender: "M", tableNumber: 18, tableName: "VOIX", status: "Mr", state: "waiting" },

            //Table 19 - RESONANCE
            { id: 146, firstName: "Jolie", lastName: "Mbemba", gender: "F", tableNumber: 19, tableName: "RESONANCE", status: "Mme", state: "waiting" },
            { id: 147, firstName: "Maguy", lastName: "Danga", gender: "F", tableNumber: 19, tableName: "RESONANCE", status: "Mme", state: "waiting" },
            { id: 148, firstName: "Sr Orante", lastName: "", gender: "F", tableNumber: 19, tableName: "RESONANCE", status: "Mme", state: "waiting" },
            { id: 149, firstName: "Aimee", lastName: "Kinduku", gender: "F", tableNumber: 19, tableName: "RESONANCE", status: "Mme", state: "waiting" },
            { id: 150, firstName: "Batwamba", lastName: "Marie", gender: "F", tableNumber: 19, tableName: "RESONANCE", status: "Mme", state: "waiting" },
            { id: 151, firstName: "Ntumba", lastName: "Marie", gender: "N/A", tableNumber: 19, tableName: "RESONANCE", status: "Couple", state: "waiting" },
            { id: 152, firstName: "Florance", lastName: "", gender: "F", tableNumber: 19, tableName: "RESONANCE", status: "Mme", state: "waiting" },
            { id: 153, firstName: "Mbuyi", lastName: "Nyengele", gender: "N/A", tableNumber: 19, tableName: "RESONANCE", status: "Couple", state: "waiting" },
            { id: 154, firstName: "Kanku", lastName: "Nyengele", gender: "N/A", tableNumber: 19, tableName: "RESONANCE", status: "Couple", state: "waiting" },

            //Table 20 - HORIZON
            { id: 155, firstName: "Tshitenge", lastName: "", gender: "N/A", tableNumber: 20, tableName: "HORIZON", status: "Couple", state: "waiting" },
            { id: 156, firstName: "Lody", lastName: "", gender: "N/A", tableNumber: 20, tableName: "HORIZON", status: "Couple", state: "waiting" },
            { id: 157, firstName: "Kayeye", lastName: "", gender: "N/A", tableNumber: 20, tableName: "HORIZON", status: "Couple", state: "waiting" },
            { id: 158, firstName: "Kambembo", lastName: "", gender: "N/A", tableNumber: 20, tableName: "HORIZON", status: "Couple", state: "waiting" },
            { id: 159, firstName: "Mbaya", lastName: "", gender: "N/A", tableNumber: 20, tableName: "HORIZON", status: "Couple", state: "waiting" },
            ];

        /* =========================================
           2. STATE & CONFIG
           ========================================= */
        let currentFilterTable = 'All';
        let currentSearchQuery = '';

        // Extract unique tables for filtering
        const tables = ['All', ...new Set(guests.map(g => `${g.tableNumber} - ${g.tableName}`))];

        // Dictionary for guest states
        const stateConfig = {
            'not_arrived': { label: 'Non arrivé', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', colorClass: 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-navy-800 dark:text-gray-400 dark:border-navy-700 hover:bg-gray-200 dark:hover:bg-navy-700', activeClass: 'bg-gray-500 text-white border-gray-500 shadow-md ring-2 ring-gray-200 dark:ring-navy-800' },
            'waiting': { label: 'En attente', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', colorClass: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40', activeClass: 'bg-amber-500 text-white border-amber-500 shadow-md ring-2 ring-amber-100 dark:ring-amber-900/50' },
            'placed': { label: 'Placé', icon: 'M5 13l4 4L19 7', colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40', activeClass: 'bg-emerald-500 text-white border-emerald-500 shadow-md ring-2 ring-emerald-100 dark:ring-emerald-900/50' }
        };

        /* =========================================
           3. DOM ELEMENTS
           ========================================= */
        const grid = document.getElementById('guestsGrid');
        const emptyState = document.getElementById('emptyState');
        const desktopFiltersContainer = document.getElementById('desktopTableFilters');
        const mobileFiltersContainer = document.getElementById('mobileTableFilters');
        const listTitle = document.getElementById('listTitle');
        const resultCount = document.getElementById('resultCount');
        const searchInputDesktop = document.getElementById('searchInputDesktop');
        const searchInputMobile = document.getElementById('searchInputMobile');
        
        // Stats
        const statTotal = document.getElementById('statTotal');
        const statPlaced = document.getElementById('statPlaced');
        const statMissing = document.getElementById('statMissing');

        /* =========================================
           4. RENDER FUNCTIONS
           ========================================= */
        
        // Initialize filters UI
        function renderFilters() {
            const createFilterHTML = (table, isMobile) => {
                const isActive = currentFilterTable === table;
                const baseClasses = isMobile 
                    ? "whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-2"
                    : "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors border flex justify-between items-center";
                
                const activeClasses = isActive 
                    ? "bg-navy-900 text-white border-navy-900 dark:bg-white dark:text-navy-900 dark:border-white shadow-md" 
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-navy-800 dark:text-gray-300 dark:border-navy-700 dark:hover:bg-navy-700";

                const countBadge = isActive
                    ? `<span class="bg-white/20 text-white text-xs py-0.5 px-2 rounded-full backdrop-blur-sm shadow-sm dark:bg-navy-900/20 dark:text-navy-900">${getGuestCountForTable(table)}</span>`
                    : `<span class="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded-full dark:bg-navy-900 dark:text-gray-400">${getGuestCountForTable(table)}</span>`;

                const label = table === 'All' ? 'Toutes les tables' : `Table ${table}`;

                return `<button
            id="filter-${table.replace(/[^a-zA-Z0-9]/g,'-')}"
            onclick="setTableFilter('${table}')"
            class="${baseClasses} ${activeClasses}">
                            <span>${label}</span>
                            ${countBadge}
                        </button>`;
            };

            desktopFiltersContainer.innerHTML = tables.map(t => createFilterHTML(t, false)).join('');
            mobileFiltersContainer.innerHTML = tables.map(t => createFilterHTML(t, true)).join('');
        }

        function getGuestCountForTable(tableStr) {
            if (tableStr === 'All') return guests.length;
            const [num] = tableStr.split(' - ');
            return guests.filter(g => g.tableNumber == num).length;
        }

        // Render the main guest grid
        function renderGrid() {
            // Apply Search & Filter
            let filtered = guests.filter(g => {
                // Table Filter
                const tableStr = `${g.tableNumber} - ${g.tableName}`;
                const matchTable = currentFilterTable === 'All' || tableStr === currentFilterTable;
                
                // Search Filter
                const q = currentSearchQuery.toLowerCase();
                const matchSearch = q === '' || 
                    g.firstName.toLowerCase().includes(q) || 
                    g.lastName.toLowerCase().includes(q) || 
                    g.tableName.toLowerCase().includes(q) || 
                    g.tableNumber.toString().includes(q) ||
                    g.status.toLowerCase().includes(q);

                return matchTable && matchSearch;
            });

            // Update Counters
            resultCount.textContent = `${filtered.length} résultat${filtered.length > 1 ? 's' : ''}`;
            updateGlobalStats();

            // Render Empty state
            if (filtered.length === 0) {
                grid.innerHTML = '';
                grid.classList.add('hidden');
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
                return;
            }

            // Render Cards
            grid.classList.remove('hidden');
            emptyState.classList.add('hidden');
            emptyState.classList.remove('flex');

            grid.innerHTML = filtered.map(guest => `
                <div class="bg-white dark:bg-navy-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-navy-700 hover:shadow-md transition-shadow relative overflow-hidden group">
                    
                    <!-- Top accent line based on state -->
                    <div class="absolute top-0 left-0 w-full h-1 ${guest.state === 'placed' ? 'bg-emerald-500' : (guest.state === 'waiting' ? 'bg-amber-500' : 'bg-gray-300 dark:bg-navy-600')}"></div>
                    
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <span class="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-navy-800 text-xs font-bold dark:bg-navy-900/50 dark:text-blue-300 mb-2 border border-blue-100 dark:border-navy-700">
                                ${guest.status}
                            </span>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                ${guest.lastName.toUpperCase()} ${guest.firstName}
                            </h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1.5">
                                ${guest.gender === 'M' ? '👨' : (guest.gender === 'F' ? '👩' : '👥')} Sexe: ${guest.gender}
                            </p>
                        </div>
                        
                        <!-- Table Info Badge -->
                        <div class="text-right">
                            <div class="inline-flex flex-col items-center justify-center bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-xl px-3 py-2">
                                <span class="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Table</span>
                                <span class="text-xl font-black text-navy-900 dark:text-white">${guest.tableNumber}</span>
                            </div>
                            <p class="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1 uppercase">${guest.tableName}</p>
                        </div>
                    </div>

                    <!-- Dynamic State Buttons -->
                    <div class="pt-4 mt-4 border-t border-gray-100 dark:border-navy-700">
                        <p class="text-xs text-gray-400 dark:text-gray-500 mb-2 font-medium uppercase tracking-wide">État de l'invité</p>
                        <div class="flex gap-2">
                            ${Object.keys(stateConfig).map(stateKey => {
                                const conf = stateConfig[stateKey];
                                const isActive = guest.state === stateKey;
                                const btnClass = isActive ? conf.activeClass : conf.colorClass;
                                
                                return `
                                <button onclick="changeGuestState(${guest.id}, '${stateKey}')" 
                                        class="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl border transition-all duration-200 ${btnClass}"
                                        title="${conf.label}">
                                    <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${conf.icon}"></path>
                                    </svg>
                                    <span class="text-[10px] font-bold uppercase tracking-wide">${conf.label}</span>
                                </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function updateGlobalStats() {
            statTotal.textContent = guests.length;
            statPlaced.textContent = guests.filter(g => g.state === 'placed').length;
            statMissing.textContent = guests.filter(g => g.state !== 'placed').length;
        }

        /* =========================================
           5. ACTIONS & EVENT LISTENERS
           ========================================= */

        // Change guest state dynamically
        window.changeGuestState = function(id, newState) {
            const guestIndex = guests.findIndex(g => g.id === id);
            if (guestIndex > -1) {
                guests[guestIndex].state = newState;
                renderGrid(); // Re-render to show updated state
            }
        };

        // Filter by table click
        window.setTableFilter = function(tableStr) {
    currentFilterTable = tableStr;

    listTitle.textContent =
        tableStr === 'All'
            ? 'Tous les invités'
            : `Filtre: Table ${tableStr}`;

    renderFilters();
    renderGrid();

    document.getElementById('guestsGrid').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
        const activeButton = document.getElementById(
    `filter-${tableStr.replace(/[^a-zA-Z0-9]/g,'-')}`
);

if (activeButton) {
    activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}
    };

        // Reset everything
        window.resetFilters = function() {
            currentFilterTable = 'All';
            currentSearchQuery = '';
            searchInputDesktop.value = '';
            searchInputMobile.value = '';
            listTitle.textContent = 'Tous les invités';
            renderFilters();
            renderGrid();
        };

        // Search Input Handlers
        const handleSearch = (e) => {
            currentSearchQuery = e.target.value;
            // Sync both inputs
            if(e.target.id === 'searchInputDesktop') searchInputMobile.value = currentSearchQuery;
            else searchInputDesktop.value = currentSearchQuery;
            
            renderGrid();
        };
        
        searchInputDesktop.addEventListener('input', handleSearch);
        searchInputMobile.addEventListener('input', handleSearch);

        /* =========================================
           6. DARK MODE LOGIC
           ========================================= */
        const themeToggleBtns = [document.getElementById('themeToggleBtn'), document.getElementById('themeToggleBtnMobile')];
        const html = document.documentElement;
        
        // Initial check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        updateThemeIcons();

        // Toggle action
        themeToggleBtns.forEach(btn => {
            if(!btn) return;
            btn.addEventListener('click', () => {
                html.classList.toggle('dark');
                if (html.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
                updateThemeIcons();
            });
        });

        function updateThemeIcons() {
            const isDark = html.classList.contains('dark');
            const sun = document.getElementById('themeIconSun');
            const moon = document.getElementById('themeIconMoon');
            if(sun && moon) {
                if (isDark) {
                    sun.classList.remove('hidden');
                    moon.classList.add('hidden');
                } else {
                    sun.classList.add('hidden');
                    moon.classList.remove('hidden');
                }
            }
        }

        /* =========================================
           7. INITIALIZATION
           ========================================= */
        function init() {
            renderFilters();
            renderGrid();
            updateGlobalStats();
        }

        // Start App
        init();
