# 과목별 등급에 따른 과목평점을 딕셔너리로 정의
grade_points = {
    'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0,
    'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0.0
}

courses = 0
total_points = 0

# 치훈이가 수강한 전공과목 정보 입력
for i in range(20):
    subject, credits, grade = input().split()
    
    # P/F 과목은 제외
    if grade != 'P':
        courses += float(credits)  # 학점 추가
        total_points += float(credits) * grade_points[grade]  # 학점 × 과목평점 누적

major_gpa = total_points / courses
print(major_gpa)
