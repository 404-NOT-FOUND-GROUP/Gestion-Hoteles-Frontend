import axios from "axios";

const apiClient = axios.create({
baseURL: "http://localhost:3000/GestionHoteles/v1/",
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
    const res = await apiClient.get("/hotel/getHotels");
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
    const res = await apiClient.get(`/getHotelById/${hid}`);
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
    const res = await apiClient.put(`/updateHotel/${hid}`, hotelData);
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
    const res = await apiClient.delete(`/deleteHotel/${hid}`);
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

export const getListEvents = async () => {
  try {
    const res = await apiClient.get("/event/listEvents");
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.message || "Error fetching events",
    };
  }
};

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

export const listReservationEvent = async () => {
  try {
    const res = await apiClient.get("/reservationEvent/getListReservationsEventByUser");
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.msg || "Error al obtener reservaciones",
    };
  }
};

export const cancelReservationEvent = async (rid) => {
  try {
    const res = await apiClient.delete(`/reservationEvent/cancelReservationEvent/${rid}`);
    return { data: res.data };
  } catch (e) {
    return {
      error: true,
      message: e?.response?.data?.msg || "Error al cancelar la reservación",
    };
  }
}