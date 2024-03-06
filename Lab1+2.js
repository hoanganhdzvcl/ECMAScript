const orders = [
  {
    orderId: 1,
    customerName: "Alice",
    items: [
      { productId: 101, productName: "Laptop", quantity: 2, price: 800, discount: 0.2 },
      { productId: 102, productName: "Mouse", quantity: 1, price: 20, discount: 0.2 },
    ],
  },
  {
    orderId: 2,
    customerName: "Bob",
    items: [
      { productId: 103, productName: "Monitor", quantity: 1, price: 300, discount: 0.3 },
      { productId: 104, productName: "Keyboard", quantity: 2, price: 50, discount: 0.5 },
    ],
  },
  {
    orderId: 3,
    customerName: "Charlie",
    items: [
      { productId: 105, productName: "Headphones", quantity: 3, price: 50, discount: 0.4 },
      { productId: 106, productName: "Speaker", quantity: 1, price: 100, discount: 0.3 },
    ],
  },
];
// lọc ra những đơn hàng có giá trị đơn hàng (Tổng của tất cả sản phẩm ) > 100
//tạo ra 1 mảng đối tượng mới chỉ với oderID,customerName và tổng giá trị đơn hàng 
// tính tổng số lượng của tất cả các sản phẩm trong tất cả đơn hàng 
// giả sử muốn thêm chức năng giảm giá cho đơn hàng. Mỗi sản phẩm có thể được giảm giá
// một số phần trăm nào đó . Hãy thêm thuộc tính discount vào mỗi sản phẩm
// sau đó : 
// Sử dụng map để tính giá bán cuối cùng (sau khi được giảm giá) của mỗi sản phẩm 
// trong đơn hàng 
// sử dụng reduce để tính tổng giá trị giảm giá của tất cả sản phẩm trong tất cả đơn hàng
let itemNewPrice = [];
let total100 = [];
let newOrders = [];
let totalQuantity = 0;
for (const { orderId, customerName, items } of orders) {
  let tongBill = items.reduce((tong, item) => tong + item.price * item.quantity, 0);
  // console.log(tongBill);
  if (tongBill > 100) {
    total100 = [...total100, { orderId, customerName, items }];
  }
  newOrders = [...newOrders, { orderId, customerName, tongBill }];
  for (const item of items) {
    totalQuantity += item.quantity;
  }

  // Sử dụng map để tính giá bán cuối cùng (sau khi được giảm giá) của mỗi sản phẩm trong đơn hàng 
 itemNewPrice = items.map((item) => {
    let newPrice = item.price - (item.price * item.discount);
    return { ...item, newPrice };
  })
  console.log(itemNewPrice);
}


// lọc ra những đơn hàng có giá trị đơn hàng (Tổng của tất cả sản phẩm ) > 100
console.log("Đơn hàng có tổng hơn 100 là: ", total100);

//tạo ra 1 mảng đối tượng mới chỉ với oderID,customerName và tổng giá trị đơn hàng 
console.log(`Mảng đối tượng mới với tổng bill là:`, newOrders);

// tính tổng số lượng của tất cả các sản phẩm trong tất cả đơn hàng 
console.log(`Tổng số lượng sản phẩm trong tất cả đơn hàng là:${totalQuantity}`);


// sử dụng reduce để tính tổng giá trị giảm giá của tất cả sản phẩm trong tất cả đơn hàng
let totalDiscoutPrice = orders.reduce((total,order)=> {
  let orderDiscountPrice = order.items.reduce((total,item)=>total + item.price *item.discount,0);
return total + orderDiscountPrice;
},0);
console.log(`Tổng giá trị giảm giá của tất cả sản phẩm trong tất cả đơn hàng là: ${totalDiscoutPrice}`);






















//  let sumAll = newOrders.reduce((total,order)=>total + order.tongBill,0);
//  console.log(`Tổng tất cả sản phẩm (chưa giảm giá là): ${sumAll}`);












