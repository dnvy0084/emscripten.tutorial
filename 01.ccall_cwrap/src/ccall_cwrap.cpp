
#include <stdio.h>

extern "C"{

	int sumWithConst( int );
	int sumAandB( int, int );

	const int n = 3;
	const char * s = "world!";

	// js로 컴파일 시 접두어로 항상 문자열 "_"가 붙는다. 
	// EXPORTED_FUNCTIONS로 지정하지 않은 함수도 호출 가능하다. 
	int sumWithConst( int a ){

		return sumAandB( a, n );
	}

	int sumAandB( int a, int b ){

		return a + b;
	}

	void print( char * str ){

		printf("%s %s\n", str, s );
	}

	int sumAllInArray( unsigned int * p, int len ){

		int n = 0;

		for(int i = 0; i < len; i++){

			n += *( p + i );

			printf("%d-%d\n", i, *( p + i ) );
		}

		return n;
	}
}