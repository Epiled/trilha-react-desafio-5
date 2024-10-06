import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://kliftjtyiekkvsufbwag.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaWZ0anR5aWVra3ZzdWZid2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMjIwMjgsImV4cCI6MjA0Mzc5ODAyOH0.qCMF9bH2RGyzVr3sBeOd9VtjOwAH4cdJc3mnBy6mSCU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaWZ0anR5aWVra3ZzdWZid2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMjIwMjgsImV4cCI6MjA0Mzc5ODAyOH0.qCMF9bH2RGyzVr3sBeOd9VtjOwAH4cdJc3mnBy6mSCU"
    }
})