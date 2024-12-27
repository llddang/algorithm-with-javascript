function solution(price, money, count) {
    const totalPrice = (1+count) * count / 2 * price;
    return totalPrice < money ? 0 : totalPrice - money;
}
