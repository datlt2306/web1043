function $(selector) {
    const elements = document.querySelectorAll(selector);
    return elements.length > 1 ? elements : elements[0];
}

// Define variable
const container = $(".container");
const seats = $(".row .seat:not(.occupied)");
const count = $("#count");
const total = $("#total");
const movieSelect = $("#movie");

//

const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // Lấy vị trí ghế đã chọn
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    // Lưu lại vị trí ghế đã chọn vào local storage
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
    // Lấy số ghế đã chọn
    const selectedSeatsCount = selectedSeats.length;
    // Hiển thị tổng số ghế đã chọn
    count.innerText = selectedSeatsCount;
    // Hiển thị tổng số tiền dựa trên số ghế đã chọn
    total.innerText = selectedSeatsCount * 10;
};

container.addEventListener("click", function (e) {
    // target là phần tử được click
    const target = e.target;
    // Nếu click vào ghế và ghế đó chưa có người ngồi thì thêm class selected
    if (target.classList.contains("seat") && !target.classList.contains("occupied")) {
        target.classList.toggle("selected");
        updateSelectedCount();
    }
});
