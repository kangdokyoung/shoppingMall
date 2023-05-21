// 액션 타입 선언 부분.
// 뒤에 as const를 붙여서 나중에 객체를 만들 때 action.type의 값을 추론하는 과정에서 action.type이
// string으로 추론되지 않고 "banner/CHANGETRUE" 와 같이 문자열로 추론되도록 해준다.
const CHNAGETRUE = "banner/CHANGETRUE" as const;
const CHANGEFALSE = "banner/CHANGEFALSE" as const;

//액션 생성함수 선언
export const toggleTrue = () => ({
  type: CHNAGETRUE,
});

export const toggleFalse = () => ({
  type: CHANGEFALSE,
});

// 액션 객체 타입 선언 부분
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해준다.
// 위의액션 타입을 선언 할 때 as const 를 하지 않으면 이 부분이 제대로 작동을 안함.
type BannerAction =
  | ReturnType<typeof toggleTrue>
  | ReturnType<typeof toggleFalse>;

//state 타입 선언
type BannerState = {
  bannerToggle: boolean;
};

//초기상태
const initialState: BannerState = {
  bannerToggle: false,
};

export const toggleChange = (
  state: BannerState = initialState,
  action: BannerAction
): BannerState => {
  switch (action.type) {
    case CHNAGETRUE:
      return { bannerToggle: !state.bannerToggle };
    case CHANGEFALSE:
      return { bannerToggle: !state.bannerToggle };
    default:
      return state;
  }
};
