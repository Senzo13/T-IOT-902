import englishMessages from "ra-language-english";

const getYears = (date: any) => {
  const year = date.getFullYear();
  return year;
};

export default {
  ...englishMessages,
  pos: {
    analytics: {
      name: "Analytics",
      luminosities: "Luminosities",
      temperatures: "Temperature",
      air_humidities: "Humidity",
      soil_moistures: "Moisture",
      data: {
        value: "Value",
        percentage: "Percentage",
        degree: "Degree",
      },
    },
    menu: {
      dashboard: "Dashboard",
      users: "Users",
    },
    users: {
      create: {
        title: "Create User",
      },
      edit: {
        title: "Edit User",
      },
      title: "Users List",
      filter: {
        username: "Filter by username",
      },
    },
    dashboard: {
      week: "Week",
      month: "Month",
      year: "Year",
      years: `YEAR ${getYears(new Date())}`,
      back_version: "BACK /VERSION",
      front_version: "FRONT /VERSION",
      sensor_temperature: "TEMPERATURE",
      sensor_luminosity: "LUMINOSITY",
      sensor_humidity: "HUMIDITY",
      sensor_moisture: "MOISTURE",
      varieties: "VARIETIES ACTIVITY",
      last_commits: "LAST COMMITS",
      list: {
        users: "USERS",
        plants: "PLANTS",
        last_users: "LASTEST USERS",
        last_servers: "LAST PLANTS",
      },
      date: {
        title: "DATE AND TIME",
        type: "en-US",
      },
      legend: {
        users: "BY DAY",
        servers: "BY DAY",
      },
      sensors: {
        today: "SENSORS",
        average: "AVERAGE SENSORS PER DAY",
      },
      average: {
        average_daily: "/day",
        average_weekly: "/week",
        average_monthly: "/month",
        average_yearly: "/year",
      },
      monthly_revenue: "Monthly Revenue",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      all_reviews: "See all reviews",
      new_customers: "New Customers",
      all_customers: "See all customers",
      pending_orders: "Pending Orders",
      order: {
        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items",
      },
      pending: {
        reviews: "SENSOR(S) PENDING",
        approval: "APPROVAL",
        alert: {
          necessary: "Needs approval",
          no_action: "No action required",
        },
      },
    },
  },
};
