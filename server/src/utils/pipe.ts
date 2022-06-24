// 함수들을 받아서 연속해서 처리해주는 help 함수
const pipe = (...functions: any[]): Function => {
  return (first_value: any) =>
    functions.reduce((prev_value, func) => func(prev_value), first_value);
};

export default pipe;
