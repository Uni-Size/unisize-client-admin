export interface StudentInfoModalProp {
  open: boolean;
  setOpen: (value: boolean) => void;
  studentId: number | null;
}

interface UniformItem {
  size: number;
  quantity: number;
  isNew: boolean;
}
export interface PurchaseInfoData {
  winterUniform: {
    jacket?: UniformItem; //자켓
    jersey?: UniformItem; //점퍼
    Hooded?: UniformItem; //후드집업
    blouse?: UniformItem; //블라우스
    shirt?: UniformItem; //셔츠
    knitVest?: UniformItem; //니트조끼
    fabricVest?: UniformItem; //원단조끼
    skirt?: UniformItem; //치마
    pants?: UniformItem; //바지
    gymTop?: UniformItem; //체육복 상의
    gymPants?: UniformItem; //체육복 바지
    gymBrushedPants?: UniformItem; //체육복 기모바지
  };
  summerUniform: {
    blouse?: UniformItem; //블라우스
    shirt?: UniformItem; //셔츠
    caraSleeves?: UniformItem; //카라반팔
    longPants?: UniformItem; //긴교복바지
    shortsPants?: UniformItem; //짧은교복바지
    bandShortsPants?: UniformItem; //고무줄반바지
    gymTop?: UniformItem; //체육복 상의
    gymPants?: UniformItem; //체육복 하의
  };
  namePlate: {
    namePlate?: number; // 명찰 개수
    attachedArray?: {
      //명찰 부착 요청 품목
      winterUniform: string[];
      summerUniform: string[];
    };
  };
  supplies: {
    stockings?: {
      flesh?: number; //살색스타킹
      feetless?: number; //무발스타킹
      basic?: number; //유발스타킹
      brushed?: number; //기모스타킹
    };
    underpants?: {
      //속바지
      xl?: number;
      l?: number;
    };
    tshirt?: {
      white?: {
        //흰색면티
        85?: number;
        90?: number;
        95?: number;
        100?: number;
        105?: number;
        110?: number;
        115?: number;
      };
      black?: {
        //검정면티
        85?: number;
        90?: number;
        95?: number;
        100?: number;
        105?: number;
        110?: number;
        115?: number;
      };
    };
  };
}
