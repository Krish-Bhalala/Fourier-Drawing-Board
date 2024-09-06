/*
X : Fourier Transformed Array
x : input array to undergo FFT 
N : size of input

Discrete Fourier Transform
F[k] = ∑[n=0 to N-1] f[n] * e^(-j * 2π * k * n / N)

Euler's Formula
e^(iθ) = cos(θ) + i*sin(θ)
*/ 

function dft(x){
    let X = [];
    const N = x.length;

    for(let k=0; k<N; k++){
        let realPart = 0;
        let imgPart = 0;

        for(let n=0; n<N; n++){
            const phi = (TWO_PI * k * n)/N; 
            realPart += x[n] * cos(phi);
            imgPart -= x[n] * sin(phi);
        }

        realPart /= N;
        imgPart /= N;
        
        let frequency = k;
        let amplitude = sqrt(realPart*realPart + imgPart*imgPart);
        let phase = atan2(imgPart,realPart);
        X[k] = {realPart,imgPart,frequency,amplitude,phase}; 
    }

    return X;
}