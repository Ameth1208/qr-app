export interface QRFormProps {
  mode: 'dynamic' | 'static';
}

export interface QRCardProps {
  data?: string;
  dotsColor?: string;
  backgroundColor?: string;
  dotsType?: 'square' | 'rounded' | 'dots';
  cornersSquareType?: 'square' | 'rounded' | 'extra-rounded';
  cornersDotType?: 'square' | 'rounded' | 'dots';
  logo?: string;
}

export interface QRGeneratorProps {
  data: string;
  width?: number;
  height?: number;
  dotsColor?: string;
  backgroundColor?: string;
  dotsType?: 'square' | 'rounded' | 'dots';
  cornersSquareType?: 'square' | 'rounded' | 'extra-rounded';
  cornersDotType?: 'square' | 'rounded' | 'dots';
  logo?: string;
  bare?: boolean;
}

