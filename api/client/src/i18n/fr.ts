import frenchMesages from "ra-language-french";

const getYears = (date: any) => {
  const year = date.getFullYear();
  return year;
};

export default {
  ...frenchMesages,
  resources: {
    products: {
      name: "Produit |||| Produits",
      fields: {
        name: "Nom",
        reference: "Référence",
        price: "Prix",
        category_id: "Catégorie",
        width: "Largeur",
        height: "Hauteur",
        thumbnail: "Aperçu",
        stock: "Stock",
        sales: "Ventes",
      },
    },
    reviews: {
      name: "Avis |||| Avis",
      fields: {
        product_id: "Produit",
        customer_id: "Client",
        command_id: "Commande",
        date: "Date",
        rating: "Note",
        comment: "Commentaire",
      },
    },
    customers: {
      name: "Client |||| Clients",
      fields: {
        first_name: "Prénom",
        last_name: "Nom",
        email: "E-mail",
        address: "Adresse",
        zipcode: "Code postal",
        city: "Ville",
        commands: "Commandes",
        birthday: "Anniversaire",
        first_seen: "Première visite",
        last_seen: "Dernière visite",
        has_ordered: "A commandé",
        latest_purchase: "Dernier achat",
        has_newsletter: "Abonné à la newsletter",
        groups: "Segments",
        nb_commands: "Nb commandes",
        total_spent: "Dépenses",
      },
    },
    commands: {
      name: "Commande |||| Commandes",
      fields: {
        reference: "Référence",
        date_gte: "Passée depuis",
        date_lte: "Passée avant",
        customer_id: "Client",
        nb_items: "Nb articles",
        total_gte: "Montant minimum",
        status: "Etat",
        returned: "Retournée",
        basket: "Panier",
        delivery_fees: "Frais de livraison",
        total_ex_taxes: "Total HT",
        tax_rate: "Taux de TVA",
        taxes: "TVA",
      },
    },
  },
  pos: {
    analytics: {
      name: "Analytique",
      luminosities: "Luminosité",
      temperatures: "Température",
      air_humidities: "Humidité de l'air",
      soil_moistures: "Humidité du sol",
      data: {
        value: "Valeur",
        percentage: "Pourcentage",
        degree: "Degré",
      },
    },
    menu: {
      dashboard: "Tableau de bord",
      users: "Utilisateurs",
    },
    users: {
      create: {
        title: "Créer un utilisateur",
      },
      edit: {
        title: "Edition de l'utilisateur",
      },
      show: {
        title: "Affichage de l'utilisateur",
      },
      title: "Liste des utilisateurs",
      filter: {
        username: "Filtrer par username",
      },
    },
    dashboard: {
      week: "Semaine",
      month: "Mois",
      year: "Année",
      years: `ANNÉE ${getYears(new Date())}`,
      varieties: "VARIÉTÉS ACTIVES",
      last_commits: "DERNIERS COMMITS",
      back_version: "BACK /VERSION",
      front_version: "FRONT /VERSION",
      sensor_temperature: "TEMPÉRATURE",
      sensor_luminosity: "LUMINOSITÉ",
      sensor_humidity: "HUMIDITÉ DE L'AIR",
      sensor_moisture: "HUMIDITÉ DU SOL",
      list: {
        users: "UTILISATEURS",
        plants: "PLANTES",
        last_users: "DERNIERS UTILISATEURS",
        last_plants: "DERNIERES PLANTES",
      },
      date: {
        title: "DATE ET HEURE",
        type: "fr-FR",
      },
      legend: {
        users: "PAR JOUR",
        servers: "PAR JOUR",
      },
      sensors: {
        today: "CAPTEURS",
        average: "CAPTEURS UTILISÉS PAR JOUR",
      },
      average: {
        average_daily: "/jour",
        average_weekly: "/semaine",
        average_monthly: "/mois",
        average_yearly: "/année",
      },
      monthly_revenue: "CA à 30 jours",
      new_orders: "Nouvelles commandes",
      pending_reviews: "Commentaires à modérer",
      all_reviews: "Voir tous les commentaires",
      new_customers: "Nouveaux clients",
      all_customers: "Voir tous les clients",
      pending_orders: "Commandes à traiter",
      order: {
        items:
          "par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters",
      },
      pending: {
        reviews: "CAPT. EN ATTENTE",
        approval: "APPROBATION",
        alert: {
          necessary: "Examinez les actions nécessaires",
          no_action: "Aucune action requise",
        },
      },
    },
  },
};
