const baseConfig = {
  weddingDay: "Tuesday",
  weddingTime: "12.00 - 1.00",
  weddingDate: "Oct 31, 2023",
  showBuiltWithInfo: false,
  showQrCode: true,
  calendarInfo: {
    timeStartISO: "2020-02-22T19:00:00+08:00",
    timeEndISO: "2020-02-22T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Erin",
    groomName: "Mohit",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "San Francisco City Hall",
    addressLine1: "Mayors Balcony,",
    addressLine2: "1 Dr Carlton B Goodlett Pl,",
    city: "San Francisco",
    country: "CA 94102",
    mapUrl: "https://maps.app.goo.gl/uKoyBB5PXTvcGBoa6"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "moer.party",
    publishedTime: "2023-09-20"
  }
};

const lang = {
  id: {
    }
  }
};

export default {
  ...baseConfig,
  lang
};
