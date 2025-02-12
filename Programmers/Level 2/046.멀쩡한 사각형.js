function gcd(a, b) {
    while(b) [a, b] = [b, a % b];
    return a;
}

function solution(w, h) {
    const g = gcd(w, h);
    const [ww, hh] = [w / g, h / g];
  
    const cut = ww * hh - (ww - 1) * (hh -  1);
  
    return w * h - cut * g;
}
