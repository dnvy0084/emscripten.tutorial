
#include <stdio>

extern "C"{

	int getN(){
		return 3;
	}

	int sum( a ){
		return a + getN();
	}
}