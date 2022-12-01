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

let ticketValue = +movieSelect.value;
//

const updateSelectedCount = () => {
    // Lấy tất cả các ghế đã được chọn có class là .seat và .selected
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // Lấy số lượng ghế đã chọn
    const selectedSeatsCount = selectedSeats.length;
    // Hiển thị tổng số ghế đã chọn
    count.innerText = selectedSeatsCount;
    // Hiển thị tổng số tiền dựa trên số ghế đã chọn
    total.innerText = selectedSeatsCount * ticketValue;
};

movieSelect.addEventListener("change", function (e) {
    // Lấy giá vé
    ticketValue = +e.target.value;
    // Gọi hàm updateSelectedCount để hiển thị lại tổng số tiền
    updateSelectedCount();
});
container.addEventListener("click", function (e) {
    // target là phần tử được click
    const target = e.target;
    // Nếu click vào ghế và ghế đó chưa có người ngồi thì thêm class selected
    if (target.classList.contains("seat") && !target.classList.contains("occupied")) {
        target.classList.toggle("selected");
        updateSelectedCount();
    }
});
