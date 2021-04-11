import axiosClient from './axiosClient'

const coursesAPI = {
    getCourses: () => {
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    },
};

export default coursesAPI;

// Cách sử dụng 

// import coursesAPI from 'src/services/coursesAPI'

// const {data} = await coursesAPI.getCourses();