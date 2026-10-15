export const sampleTracking = {
  id: "NK-1042",
  status: "In transit to Accra",
  route: "Tarkwa to Accra",
  note: "A sample parcel is moving through the route demo.",
  steps: [
    { title: "Shipment booked", place: "Tarkwa", time: "08:10", complete: true },
    { title: "Collected for dispatch", place: "Tarkwa depot", time: "09:05", complete: true },
    { title: "Departed local hub", place: "Western Region", time: "10:20", complete: true },
    { title: "On the way", place: "Accra route", time: "In progress", complete: false },
    { title: "Delivery handoff", place: "Accra", time: "Next step", complete: false },
  ],
} as const;
