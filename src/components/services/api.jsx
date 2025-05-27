import axios from "axios";

const apiClient = axios.create({
baseURL: "http://localhost:3000/GestionHoteles/v1",
  timeout: 5000,
  httpsAgent: false,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth
export const login = (data) => {
    return apiClient.post("/auth/login", data);
};

export const register = async (data) => {
    try {
    return await apiClient.post("/auth/register", data);
    } catch (e) {
    return {
        error: true,
        e,
    };
    }
};

export const findByEmail = async (email) => {
  try {
    const res = await apiClient.post("/auth/findByEmail", { user: email });
    return {data: res.data};
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error finding user",
    };
  }
};

export const updatePasswordById = async (uid, newPassword) => {
  try {
    const res = await apiClient.put(`/auth/updatePasswordById/${uid}`, {
      password: newPassword,
    });
    return {data: res.data};
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error updating password",
    };
  }
};


// Events

export const createEvent = async (eventData) => {
  try {
    const res = await apiClient.post("/event/createEvent", eventData);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error creating event",
    };
  }
};

export const updateEvent = async (eid, updatedData) => {
  try {
    const res = await apiClient.put(`/event/updateEvent/${eid}`, updatedData);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error updating event",
    };
  }
};

export const deleteEvent = async (eid) => {
  try {
    const res = await apiClient.delete(`/event/deleteEvent/${eid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error deleting event",
    };
  }
};

export const listEvents = async () => {
  try {
    const res = await apiClient.get("/event/listEvents");
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error listing events",
    };
  }
};

export const findEventById = async (eid) => {
  try {
    const res = await apiClient.get(`/event/findEventById/${eid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error finding event",
    };
  }
};

// Hoteles
export const createHotel = async (formData) => {
  try {
    const res = await apiClient.post("/hotel/createHotel", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error creating hotel",
    };
  }
};

export const getHotels = async () => {
  try {
    const res = await apiClient.get("/hotel/getHotels", );
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error fetching hotels",
    };
  }
};

export const getHotelById = async (hid) => {
  try {
    const res = await apiClient.get(`/hotel/getHotelById/${hid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error fetching hotel by ID",
    };
  }
};

export const updateHotel = async (hid, hotelData) => {
  try {
    const res = await apiClient.put(`/hotel/updateHotel/${hid}`, hotelData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error updating hotel",
    };
  }
};

export const deleteHotel = async (hid) => {
  try {
    const res = await apiClient.delete(`/hotel/deleteHotel/${hid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error deleting hotel",
    };
  }
};

export const getReservations = async () => {
  try {
    const res = await apiClient.get("/hotel/getReservations");
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error fetching reservations",
    };
  }
};

// Reservation-Events

export const createReservationEvent = async (eid, formData) => {
  try {
    const res = await apiClient.post(`/reservationEvent/createReservationEvent/${eid}`, formData);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.msg || "Error creando reservación de evento",
    };
  }
};

export const findEventReservation = async (_id) => {
  try {
    const res = await apiClient.get(`/reservationEvent/findReservationEvent/${_id}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error finding reservation",
    };
  }
};

export const generatePDFEvent = async (_id) => {
  try {
    const res = await apiClient.get(`/reservationEvent/generatePDFEvent/${_id}`, {
      responseType: 'blob',
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error generating PDF",
    };
  }
};

export const cancelEventReservation = async (_id) => {
  try {
    const res = await apiClient.delete(`/reservationEvent/cancelReservationEvent/${_id}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error canceling reservation",
    };
  }
};

// Reservation-Rooms

export const createReservation = async (rid, data) => {
  try {
    const res = await apiClient.post(`/reservationRoom/createReservationRoom/${rid}`, data);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error creating reservation",
    };
  }
};

export const findReservation = async (_id) => {
  try {
    const res = await apiClient.get(`/reservationRoom/findReservationRoom/${_id}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error finding reservation",
    };
  }
};

export const generatePDF = async (_id) => {
  try {
    const res = await apiClient.get(`/reservationRoom/generatePDFRoom/${_id}`, {
      responseType: 'blob',
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error generating PDF",
    };
  }
};

export const cancelReservation = async (_id) => {
  try {
    const res = await apiClient.delete(`/reservationRoom/cancelReservationRoom/${_id}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error canceling reservation",
    };
  }
};

// Rooms

export const createRoom = async (roomData) => {
  try {
    const res = await apiClient.post("/rooms/addRoom", roomData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error creating room",
    };
  }
};

export const listRooms = async () => {
  try {
    const res = await apiClient.get("/rooms/listRooms");
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error listing rooms",
    };
  }
};

export const getRoomById = async (rid) => {
  try {
    const res = await apiClient.get(`/rooms/findByRoom/${rid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error finding room",
    };
  }
};

export const updateRoom = async (rid, roomData) => {
  try {
    const res = await apiClient.put(`/rooms/updateRoom/${rid}`, roomData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error updating room",
    };
  }
};

export const deleteRoom = async (rid) => {
  try {
    const res = await apiClient.delete(`/rooms/deleteRoom/${rid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error deleting room",
    };
  }
};

// Users

export const getUsers = async () => {
  try {
    const res = await apiClient.get("/user/getUsers");
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error getting users",
    };
  }
};

export const deleteUser = async (uid) => {
  try {
    const res = await apiClient.delete(`/user/deleteUser/${uid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error deleting user",
    };
  }
};

export const updateUser = async (uid, data) => {
  try {
    const res = await apiClient.put(`/user/updateUser/${uid}`, data);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error updating user",
    };
  }
};

export const updatePassword = async (uid, newPassword) => {
  try {
    const res = await apiClient.patch(`/user/updatePassword/${uid}`, {
      password: newPassword,
    });
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error updating password",
    };
  }
};

export const findUserById = async (uid) => {
  try {
    const res = await apiClient.get(`/user/findByUser/${uid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error finding user",
    };
  }
};
