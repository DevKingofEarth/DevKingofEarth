# GATE EE - LAST MINUTE FORMULAS
## Complete Formula Reference for GATE Electrical Engineering
## SECTION 1: POWER ELECTRONICS (DETAILED)

### Buck Converter (Step-Down)
**Output Voltage:** V₀ = D × Vₛ  
**Where:** D = Duty cycle = T_on/T

**Inductor Current Ripple:**
ΔI_L = (Vₛ - V₀) × D / (f × L)

**Minimum Inductance:**
L_min = (1-D) × R / (2f)

**Output Capacitor:**
C = (1-D) / (8 × L × f² × (ΔV₀/V₀))

**Continuous Conduction Mode (CCM):**
I_L(avg) > ΔI_L/2

---

### Boost Converter (Step-Up)
**Output Voltage:** V₀ = Vₛ / (1-D)  
**Where:** D = Duty cycle

**Voltage Gain:** V₀/Vₛ = 1/(1-D)

**Inductor Current:**
I_L(avg) = I₀ / (1-D)

**Current Ripple:**
ΔI_L = Vₛ × D / (f × L)

**Minimum Inductance:**
L_min = D(1-D)² × R / (2f)

**Duty Cycle for given V₀:**
D = 1 - (Vₛ/V₀)

---

### Buck-Boost Converter
**Output Voltage:** V₀ = -D × Vₛ / (1-D)

**Key Points:**
- Output polarity reversed
- Can step-up or step-down
- V₀/Vₛ = D/(1-D)

**When D < 0.5:** Step-down  
**When D > 0.5:** Step-up

**Inductor Current:**
I_L(avg) = I₀ / (1-D)

---

### Rectifiers

**Half-Wave Rectifier:**
V_avg = V_m/π = 0.318V_m  
V_rms = V_m/2 = 0.5V_m  
Form Factor = π/2 = 1.57  
Ripple Factor = 1.21

**Full-Wave Rectifier (Center-Tap):**
V_avg = 2V_m/π = 0.636V_m  
V_rms = V_m/√2 = 0.707V_m  
Form Factor = 1.11  
Ripple Factor = 0.482

**Bridge Rectifier:**
Same as full-wave  
PIV = V_m (not 2V_m like center-tap)

**Controlled Rectifiers:**

Single-Phase Half-Wave:
V_avg = (V_m/2π)(1 + cosα)

Single-Phase Full-Wave:
V_avg = (V_m/π)(1 + cosα)

Three-Phase Half-Wave:
V_avg = (3V_mL/2π)cosα

Three-Phase Full-Wave:
V_avg = (3V_mL/π)cosα

---

### Choppers

**Class A:** First quadrant (V₀ > 0, I₀ > 0)
**Class B:** Second quadrant (V₀ > 0, I₀ < 0)
**Class C:** Two-quadrant
**Class D:** Two-quadrant
**Class E:** Four-quadrant

**Jones Chopper:** For DC motor speed control
**Morgan Chopper:** For low power applications

---

### Inverters

**Single-Phase Half-Bridge:**
V₀(rms) = V_s/2

**Single-Phase Full-Bridge:**
V₀(rms) = V_s

**180° Conduction Mode:**
V₀(avg) = 0  
V₀(rms) = V_s√(2/3) = 0.816V_s

**120° Conduction Mode:**
V₀(avg) = 0  
V₀(rms) = V_s/√3 = 0.577V_s

**Three-Phase Inverter:**
Line voltage = √3 × Phase voltage

---

### SCR & Thyristors

**Firing Angle (α):** Delay angle for triggering
**Conduction Angle:** π - α (single-phase)

**Latching Current (I_L):** Minimum anode current to maintain conduction after gate pulse removal
**Holding Current (I_H):** Minimum anode current to maintain conduction (I_H < I_L)

**Turn-ON Methods:**
1. Gate triggering
2. Forward voltage triggering
3. dv/dt triggering
4. Light triggering
5. Temperature triggering

**Turn-OFF Methods (Commutation):**
1. Natural/Line commutation
2. Forced commutation
3. Class A, B, C, D, E, F

---

## SECTION 2: ELECTRICAL MACHINES

### Transformers

**EMF Equation:**
E = 4.44 × f × N × Φ_m
Where:
- E = RMS voltage (V)
- f = Frequency (Hz)
- N = Number of turns
- Φ_m = Maximum flux (Wb)

**Turns Ratio:**
E₁/E₂ = N₁/N₂ = V₁/V₂ = I₂/I₁

**Efficiency:**
η = Output Power / Input Power  
η = Output / (Output + Losses)  
Maximum efficiency occurs when: Copper Loss = Iron Loss

**Voltage Regulation:**
%Reg = [(E₂ - V₂)/V₂] × 100
Approximate: %Reg ≈ %R cosφ ± %X sinφ  
(+ for lagging, - for leading)

**OC Test (Open Circuit):**
Measures: Core loss (Iron loss), Magnetizing current, No-load current  
Conducted at: Rated voltage

**SC Test (Short Circuit):**
Measures: Copper loss, Equivalent impedance  
Conducted at: Reduced voltage (5-10% rated)

**Equivalent Circuit Parameters:**
R₀₁ = V₁²/P₀ (from OC test)  
Z₀₁ = V_sc/I_sc (from SC test)  
R₀₁ = P_sc/I_sc²  
X₀₁ = √(Z₀₁² - R₀₁²)

**All-Day Efficiency:**
η_all-day = (Output in kWh / Input in kWh) × 100

---

### DC Machines

**Back EMF:**
Motor: E_b = V - I_aR_a  
Generator: E_b = V + I_aR_a

**EMF Equation:**
E_b = (PΦNZ)/(60A)
Where:
- P = Number of poles
- Φ = Flux per pole (Wb)
- N = Speed (rpm)
- Z = Total conductors
- A = Parallel paths

**Torque Equation:**
T = (PΦZI_a)/(2πA)  
T = E_b × I_a / ω (where ω = 2πN/60)

**Speed Equation:**
N ∝ (V - I_aR_a)/Φ
For shunt: N ∝ V (approximately, if R_a negligible)

**Types:**
1. **Separately Excited:** Field winding separate supply
2. **Shunt:** Field parallel to armature, constant speed
3. **Series:** Field series with armature, high starting torque
4. **Compound:** Both shunt and series field

**Speed Control:**
1. Armature voltage control
2. Field flux control
3. Armature resistance control

**Starters:**
- Three-point starter
- Four-point starter
Purpose: Limit starting current

**Losses:**
- Copper loss (I²R)
- Iron loss (Hysteresis + Eddy current)
- Mechanical loss (Friction + Windage)
- Stray load loss

---

### Induction Motors

**Synchronous Speed:**
N_s = 120f/P
Where f = frequency, P = poles

**Slip:**
s = (N_s - N_r)/N_s  
% Slip = s × 100
At start: s = 1  
At synchronous: s = 0  
Full load: s = 0.02 to 0.05

**Rotor Speed:**
N_r = N_s(1 - s)

**Slip Frequency:**
f_r = s × f

**Torque Equation:**
T = (3V²R₂/s) / [ω_s((R₂/s)² + X₂²)]
Where ω_s = 2πN_s/60

**Starting Torque (s=1):**
T_st = (3V²R₂) / [ω_s(R₂² + X₂²)]

**Maximum Torque:**
T_max = (3V²) / (2ω_sX₂)
Occurs at: s_m = R₂/X₂

**Condition for Maximum Starting Torque:**
R₂ = X₂ (external resistance added)

**Torque-Slip Relation:**
T/T_max = 2 / [(s/s_m) + (s_m/s)]

**Power Flow:**
Air Gap Power (P_g) = 3I₂²(R₂/s)  
Rotor Copper Loss = s × P_g  
Mechanical Power = (1-s) × P_g  
Torque = P_g / ω_s

**Circle Diagram:**
Shows relation between current, power factor, slip, torque

**Types:**
1. **Squirrel Cage:** Simple, rugged, low starting torque
2. **Wound Rotor:** External resistance, high starting torque

**Star-Delta Starter:**
Starting current = 1/3 of DOL  
Starting torque = 1/3 of DOL

---

### Synchronous Machines

**Speed:**
N_s = 120f/P (Always synchronous, independent of load)

**EMF Equation:**
E_f = V + I_aR_a + jI_aX_s (cylindrical rotor)  
E_f = V + I_aR_a + jI_aX_d (salient pole, d-axis)

**Power Angle Equation:**
P = (EV/X_s) sinδ (cylindrical)  
P = (EV/X_d) sinδ + (V²/2)(1/X_q - 1/X_d) sin2δ (salient)

**Where:**
- E = Excitation voltage
- V = Terminal voltage
- δ = Power angle (torque angle)
- X_s = Synchronous reactance

**Voltage Regulation:**
%Reg = [(|E| - |V|)/|V|] × 100

**Parallel Operation Conditions:**
1. Same voltage magnitude
2. Same frequency
3. Same phase sequence
4. Same phase angle

**Synchronizing Power:**
P_syn = (EV/X_s) cosδ (per mechanical radian)

**Hunting:** Oscillation of rotor around synchronous speed
Damper windings (amortisseur) prevent hunting

**V-Curves:**
Plot of I_a vs I_f at constant P
Shows relation between armature current and field current

**Inverted V-Curves:**
Plot of power factor vs I_f

**Synchronous Condenser:**
Synchronous motor running at no-load, used for power factor correction
Operates at: Leading power factor (over-excited)

---

## SECTION 3: POWER SYSTEMS

### Transmission Lines

**ABCD Parameters:**
V_s = AV_r + BI_r  
I_s = CV_r + DI_r

For short line (length < 80 km):
A = D = 1, B = Z, C = 0

For medium line (80-240 km):
Nominal π or T methods

For long line (>240 km):
Hyperbolic functions

**Surge Impedance:**
Z_c = √(L/C) = √(Z/Y)
Where Z = series impedance/km, Y = shunt admittance/km

**Surge Impedance Loading (SIL):**
P_SIL = V²/Z_c = V²√(C/L)

**Ferranti Effect:**
Receiving end voltage > Sending end voltage
Occurs at: Light load or no-load, long lines

**Wavelength:**
λ = 1/(f√(LC))

**Propagation Constant:**
γ = α + jβ = √(ZY)
Where α = attenuation constant, β = phase constant

**Velocity of Propagation:**
v = 1/√(LC) ≈ 3×10⁸ m/s (for overhead lines)

**ABCD Relations:**
AD - BC = 1 (for passive, linear network)  
A = D (for symmetrical network)

**Voltage Regulation:**
%Reg = [(|V_rNL| - |V_rFL|)/|V_rFL|] × 100

---

### Fault Analysis

**Types of Faults:**
1. **Symmetrical:** 3-phase (LLL), 3-phase to ground (LLLG)
2. **Unsymmetrical:** LG, LL, LLG

**Occurrence Frequency:**
LG: 70-80%  
LL: 15-20%  
LLG: Rare  
LLL or LLLG: 5%

**Fault Current:**
I_f = E/Z (for solid fault)

**Sequence Networks:**
- **Positive Sequence:** Normal operating sequence (abc)
- **Negative Sequence:** Reverse sequence (acb)
- **Zero Sequence:** All phases in phase

**Sequence Impedances:**
Z₁ = Positive sequence impedance  
Z₂ = Negative sequence impedance  
Z₀ = Zero sequence impedance

For synchronous machines: Z₁ ≠ Z₂  
For transformers and lines: Z₁ = Z₂

**Fault Calculations:**

Single Line to Ground (LG):
I_a1 = I_a2 = I_a0 = E/(Z₁ + Z₂ + Z₀ + 3Z_f)  
I_f = 3I_a1

Line to Line (LL):
I_a1 = -I_a2 = E/(Z₁ + Z₂ + Z_f)  
I_f = I_b = -I_c = √3 × I_a1

Double Line to Ground (LLG):
I_a1 = E/[Z₁ + Z₂||(Z₀ + 3Z_f)]

Three Phase (LLL):
I_f = E/Z₁

**Fault MVA:**
Fault MVA = Base MVA / Z_pu

---

### Per Unit System

**Base Quantities:**
Base MVA × Base kV = Base kA × Base kV (not consistent, recalculate)

Actually: S_base = √3 × V_base × I_base  
Z_base = V_base²/S_base

**Conversion:**
Z_pu(new) = Z_pu(old) × (S_base(new)/S_base(old)) × (V_base(old)/V_base(new))²

**Advantages:**
1. Simplified calculations
2. Transformer turns ratio eliminated
3. Equipment ratings comparable
4. Numerical values manageable

---

### Load Flow Analysis

**Bus Types:**
1. **Slack/Swing Bus:** Specified V and δ, find P and Q
2. **PV Bus (Generator):** Specified P and |V|, find Q and δ
3. **PQ Bus (Load):** Specified P and Q, find |V| and δ

**Methods:**

**Gauss-Seidel:**
Iterative method  
V_i^(k+1) = (1/Y_ii)[(P_i - jQ_i)/V_i^(k)* - Σ(Y_ij × V_j)]

**Newton-Raphson:**
Faster convergence  
Uses Jacobian matrix

**Decoupled Load Flow:**
P depends mainly on δ  
Q depends mainly on |V|

**Fast Decoupled:**
Assumes: |V| ≈ 1 pu, δ small

**DC Load Flow:**
Linear approximation  
Neglects losses and Q

---

### Protection

**Relay Types:**

**Overcurrent Relay:**
Operates when: I > I_pickup  
Types: Instantaneous, Definite time, Inverse time, IDMT

**Distance Relay:**
Operates when: Impedance < Reach  
Zones: Zone 1 (80-90%), Zone 2 (120%), Zone 3 (backup)

**Differential Relay:**
Operates on difference between two currents  
Used for: Transformers, generators, buses

**Directional Relay:**
Checks direction of power flow

**Distance Relay Characteristics:**
- Impedance relay: Circular
- Reactance relay: Straight line
- Mho relay: Circular through origin

**CT (Current Transformer):**
Turns ratio: N_p/N_s = I_s/I_p  
Burden = VA rating

**PT (Potential Transformer):**
Turns ratio: N_p/N_s = V_p/V_s

**Buchholz Relay:**
Transformer protection  
Detects: Internal faults, oil level low

**Lightning Arrester:**
Protects against overvoltages

**Surge Absorber:**
Limits surge voltage magnitude

---

## SECTION 4: ANALOG CIRCUITS

### Operational Amplifiers

**Ideal Op-Amp Characteristics:**
- Infinite open-loop gain (A_ol = ∞)
- Infinite input impedance (R_in = ∞)
- Zero output impedance (R_out = 0)
- Infinite bandwidth
- Zero offset voltage

**Virtual Short:** V+ = V- (negative feedback)
**Virtual Ground:** V- = 0 (when V+ grounded)

**Inverting Amplifier:**
V_o = -(R_f/R₁) × V_i  
Gain = -R_f/R₁

**Non-Inverting Amplifier:**
V_o = (1 + R_f/R₁) × V_i  
Gain = 1 + R_f/R₁

**Voltage Follower (Buffer):**
V_o = V_i  
Gain = 1  
High input impedance, low output impedance

**Summing Amplifier:**
V_o = -R_f(V₁/R₁ + V₂/R₂ + V₃/R₃ + ...)

**Difference Amplifier:**
V_o = (R_f/R₁)(V₂ - V₁)  
When R_f/R₁ = R₃/R₂

**Integrator:**
V_o = -(1/RC) ∫V_i dt  
Transfer function: -1/(sRC)

**Differentiator:**
V_o = -RC(dV_i/dt)  
Transfer function: -sRC

**Comparator:**
No feedback (open loop)  
V_o = +V_sat if V+ > V-  
V_o = -V_sat if V+ < V-

**Schmitt Trigger (Comparator with Hysteresis):**
Upper Threshold: V_UT = +V_sat × R₁/(R₁+R₂)  
Lower Threshold: V_LT = -V_sat × R₁/(R₁+R₂)  
Hysteresis: V_H = V_UT - V_LT

**Instrumentation Amplifier:**
V_o = (R₄/R₃)(1 + 2R₂/R₁)(V₂ - V₁)  
High CMRR, precise gain

**Active Filters:**

**First Order Low Pass:**
Cutoff: f_c = 1/(2πRC)  
Gain: -R_f/R₁ (inverting)

**First Order High Pass:**
Cutoff: f_c = 1/(2πRC)

**Band Pass:**
Series connection of LPF and HPF

**Band Stop (Notch):**
Parallel connection or twin-T

---

### Oscillators

**Barkhausen Criteria (for oscillation):**
1. |Aβ| = 1 (Loop gain = 1)
2. ∠Aβ = 0° or 360° (Phase shift = 0°)

**Where:**
- A = Amplifier gain
- β = Feedback factor

**RC Phase Shift Oscillator:**
Frequency: f = 1/(2πRC√6)  
Minimum gain required: A = 29  
Phase shift per section: 60°

**Wien Bridge Oscillator:**
Frequency: f = 1/(2πRC)  
Gain required: A = 3  
Balanced bridge condition: R₁ = R₂ = R, C₁ = C₂ = C

**Hartley Oscillator:**
Frequency: f = 1/(2π√(LC_eq))  
Where L_eq = L₁ + L₂ + 2M (mutual inductance)
Tapped inductor for feedback

**Colpitts Oscillator:**
Frequency: f = 1/(2π√(LC_eq))  
Where C_eq = C₁C₂/(C₁+C₂)
Tapped capacitor for feedback

**Crystal Oscillator:**
Very stable frequency  
Uses piezoelectric crystal

**Relaxation Oscillator:**
Uses RC or RL timing  
Astable multivibrator

---

### BJT Basics

**Current Relations:**
I_E = I_C + I_B  
I_C = β × I_B  
α = β/(β+1)  
β = α/(1-α)

**Where:**
- α = Common base current gain (0.95-0.99)
- β = Common emitter current gain (20-200)

**Operating Regions:**
1. **Active:** EB junction forward, CB junction reverse (Amplifier)
2. **Saturation:** Both junctions forward (Switch ON)
3. **Cutoff:** Both junctions reverse (Switch OFF)

**Fixed Bias:**
I_B = (V_CC - V_BE)/R_B  
I_C = β × I_B  
V_CE = V_CC - I_CR_C

**Voltage Divider Bias (Self-Bias):**
More stable  
V_B = V_CC × R₂/(R₁+R₂)  
I_E = (V_B - V_BE)/R_E  
I_C ≈ I_E

**Emitter Follower:**
Voltage gain ≈ 1  
Current gain ≈ β+1  
High input impedance, low output impedance

---

## SECTION 5: CONTROL SYSTEMS

### Transfer Functions

**Open Loop:**
G(s) = Output(s)/Input(s) (without feedback)

**Closed Loop:**
T(s) = G(s)/(1 + G(s)H(s))

**For Unity Feedback (H=1):**
T(s) = G(s)/(1 + G(s))

**Error Signal:**
E(s) = R(s) - C(s)H(s)  
For unity feedback: E(s) = R(s) - C(s)

---

### Block Diagram Reduction

**Series Connection:**
G_eq = G₁ × G₂

**Parallel Connection:**
G_eq = G₁ + G₂

**Feedback Connection:**
G_eq = G/(1 ± GH)  
(+ for negative feedback, - for positive feedback)

**Moving Take-off Point:**
- Ahead of block: Multiply by block gain
- Behind block: Divide by block gain

**Moving Summing Point:**
- Ahead of block: Divide by block gain
- Behind block: Multiply by block gain

---

### Signal Flow Graphs

**Mason's Gain Formula:**
T = (Σ P_k × Δ_k) / Δ

Where:
- P_k = Path gain of kth forward path
- Δ = 1 - ΣL₁ + ΣL₂ - ΣL₃ + ...
- L₁ = Individual loop gains
- L₂ = Gain products of two non-touching loops
- Δ_k = Δ for part of graph not touching kth forward path

---

### Stability Analysis

**Stable System:**
All poles in Left Half Plane (LHP)  
Impulse response decays to zero

**Unstable System:**
Any pole in Right Half Plane (RHP)  
Impulse response grows without bound

**Marginally Stable:**
Poles on imaginary axis (simple)  
Sustained oscillations

**Routh-Hurwitz Criterion:**
Construct Routh array  
Count sign changes in first column = Number of RHP poles  
If any element in first column is zero: System is marginally stable or unstable

**Special Cases:**
- Zero in first column: Replace with ε (small positive), proceed
- Entire row zero: Form auxiliary polynomial, take derivative, continue

---

### Root Locus

**Angle Condition:**
∠G(s)H(s) = ±180°(2k+1)

**Magnitude Condition:**
|G(s)H(s)| = 1

**Rules:**
1. Number of branches = Number of poles
2. Locus starts at open-loop poles (K=0), ends at zeros (K=∞) or infinity
3. Real axis segments: To the left of odd number of poles+zeros
4. Asymptotes angles: (2k+1)180°/(P-Z)
5. Centroid: (Σpoles - Σzeros)/(P-Z)
6. Breakaway points: dK/ds = 0
7. Imaginary axis crossing: Routh criterion

---

### Frequency Response

**Nyquist Criterion:**
N = Z - P
Where:
- N = Number of encirclements of -1+j0 point
- Z = Number of closed-loop poles in RHP
- P = Number of open-loop poles in RHP

For stability: Z = 0, so N = -P

**Gain Margin:**
GM = 1/|G(jω)H(jω)| at phase crossover frequency  
In dB: GM(dB) = -20log|G(jω_pc)H(jω_pc)|

**Phase Margin:**
PM = 180° + ∠G(jω_gc)H(jω_gc)  
At gain crossover frequency (where |GH| = 1)

**Bode Plot:**
- Magnitude plot: 20log|G(jω)| vs log(ω)
- Phase plot: ∠G(jω) vs log(ω)

**Corner Frequency:**
ω_c = 1/τ for first-order system

**Slope Changes:**
- Pole at origin: -20 dB/decade
- Zero at origin: +20 dB/decade
- Real pole: -20 dB/decade (starting at ω_c)
- Real zero: +20 dB/decade (starting at ω_c)

---

### Time Domain Analysis

**First Order System:**
Transfer function: C(s)/R(s) = 1/(1+τs)

Step response: c(t) = 1 - e^(-t/τ)
Time constant: τ
Settling time (2%): 4τ
Settling time (5%): 3τ

**Second Order System:**
Transfer function: ω_n²/(s² + 2ζω_ns + ω_n²)

Where:
- ω_n = Natural frequency (rad/s)
- ζ = Damping ratio

**Characteristics:**

Rise time (10% to 90%):
t_r ≈ (π - θ)/(ω_n√(1-ζ²)) where θ = cos⁻¹(ζ)

Peak time:
t_p = π/(ω_n√(1-ζ²))

Peak overshoot:
M_p = e^(-ζπ/√(1-ζ²)) × 100%

Settling time (2% criterion):
t_s = 4/(ζω_n)

Settling time (5% criterion):
t_s = 3/(ζω_n)

**Damping Cases:**
- ζ = 0: Undamped (sustained oscillations)
- 0 < ζ < 1: Underdamped (decaying oscillations)
- ζ = 1: Critically damped (fastest without overshoot)
- ζ > 1: Overdamped (no overshoot, slow)

---

### Steady State Error

**Error:**
e(t) = r(t) - c(t)  
E(s) = R(s) - C(s)

**Final Value Theorem:**
e_ss = lim(s→0) sE(s) = lim(s→0) sR(s)/(1+G(s)H(s))

**Error Constants:**

**Step Input (R(s) = 1/s):**
Position error constant: K_p = lim(s→0) G(s)H(s)  
e_ss = 1/(1+K_p)

**Ramp Input (R(s) = 1/s²):**
Velocity error constant: K_v = lim(s→0) sG(s)H(s)  
e_ss = 1/K_v

**Parabolic Input (R(s) = 1/s³):**
Acceleration error constant: K_a = lim(s→0) s²G(s)H(s)  
e_ss = 1/K_a

**System Type vs Steady State Error:**

Type 0: Finite e_ss for step, ∞ for ramp and parabolic
Type 1: Zero e_ss for step, finite for ramp, ∞ for parabolic
Type 2: Zero e_ss for step and ramp, finite for parabolic

---

## SECTION 6: SIGNALS & SYSTEMS

### Basic Signals

**Unit Step:**
u(t) = 1 for t ≥ 0, 0 for t < 0

**Unit Impulse:**
δ(t) = du(t)/dt  
∫δ(t)dt = 1  
δ(at) = (1/|a|)δ(t)

**Unit Ramp:**
r(t) = t for t ≥ 0, 0 for t < 0

**Rectangular Pulse:**
Π(t/τ) = 1 for |t| ≤ τ/2, 0 otherwise

**Triangular Pulse:**
Λ(t/τ) = 1 - |t|/τ for |t| ≤ τ, 0 otherwise

**Sinc Function:**
sinc(t) = sin(πt)/(πt)

---

### Signal Operations

**Time Shifting:**
x(t - t₀): Delay by t₀ (right shift)
x(t + t₀): Advance by t₀ (left shift)

**Time Scaling:**
x(at): Compress by factor a if a > 1, expand if 0 < a < 1
x(-t): Time reversal

**Amplitude Scaling:**
Ax(t): Multiply amplitude by A

---

### System Properties

**Linearity:**
T[a₁x₁(t) + a₂x₂(t)] = a₁T[x₁(t)] + a₂T[x₂(t)]

**Time Invariance:**
If y(t) = T[x(t)], then y(t-t₀) = T[x(t-t₀)]

**Causality:**
Output at t depends only on present and past inputs
h(t) = 0 for t < 0

**Stability (BIBO):**
Every bounded input produces bounded output
∫|h(t)|dt < ∞ (for continuous time)

**Memory:**
System with memory: Output depends on past/future inputs
Memoryless: Output depends only on present input

**Invertibility:**
Distinct inputs produce distinct outputs

---

### Convolution

**Continuous Time:**
y(t) = x(t) * h(t) = ∫x(τ)h(t-τ)dτ

**Properties:**
- Commutative: x * h = h * x
- Associative: (x * h₁) * h₂ = x * (h₁ * h₂)
- Distributive: x * (h₁ + h₂) = x * h₁ + x * h₂

**Discrete Time:**
y[n] = x[n] * h[n] = Σx[k]h[n-k]

---

### Laplace Transform

**Definition:**
X(s) = ∫x(t)e^(-st)dt (from 0⁻ to ∞)

**Region of Convergence (ROC):**
Values of s for which transform exists

**Common Transforms:**

| x(t) | X(s) | ROC |
|------|------|-----|
| δ(t) | 1 | All s |
| u(t) | 1/s | Re(s) > 0 |
| t | 1/s² | Re(s) > 0 |
| tⁿ | n!/sⁿ⁺¹ | Re(s) > 0 |
| e^(-at) | 1/(s+a) | Re(s) > -a |
| te^(-at) | 1/(s+a)² | Re(s) > -a |
| sin(ωt) | ω/(s²+ω²) | Re(s) > 0 |
| cos(ωt) | s/(s²+ω²) | Re(s) > 0 |
| e^(-at)sin(ωt) | ω/((s+a)²+ω²) | Re(s) > -a |
| e^(-at)cos(ωt) | (s+a)/((s+a)²+ω²) | Re(s) > -a |

**Properties:**

Linearity: a₁x₁(t) + a₂x₂(t) ↔ a₁X₁(s) + a₂X₂(s)

Time Shifting: x(t-t₀)u(t-t₀) ↔ e^(-st₀)X(s)

Frequency Shifting: e^(s₀t)x(t) ↔ X(s-s₀)

Time Scaling: x(at) ↔ (1/|a|)X(s/a)

Time Differentiation: dx/dt ↔ sX(s) - x(0⁻)

Time Integration: ∫x(τ)dτ ↔ X(s)/s

Initial Value Theorem: x(0⁺) = lim(s→∞) sX(s)

Final Value Theorem: lim(t→∞) x(t) = lim(s→0) sX(s)
(Valid only if poles in LHP or single pole at origin)

Convolution: x(t)*h(t) ↔ X(s)H(s)

Multiplication: x(t)h(t) ↔ (1/2πj)X(s)*H(s)

---

### Fourier Series

**For Periodic Signal x(t) with period T:**

**Exponential Form:**
x(t) = Σ C_n e^(jnω₀t)

Where:
- ω₀ = 2π/T (fundamental frequency)
- C_n = (1/T)∫x(t)e^(-jnω₀t)dt over one period

**Trigonometric Form:**
x(t) = a₀ + Σ[a_n cos(nω₀t) + b_n sin(nω₀t)]

Where:
- a₀ = (1/T)∫x(t)dt (DC component)
- a_n = (2/T)∫x(t)cos(nω₀t)dt
- b_n = (2/T)∫x(t)sin(nω₀t)dt

**Relations:**
C₀ = a₀  
C_n = (a_n - jb_n)/2  
C_(-n) = (a_n + jb_n)/2

**Symmetry Properties:**
- Even symmetry [x(t) = x(-t)]: b_n = 0
- Odd symmetry [x(t) = -x(-t)]: a₀ = a_n = 0
- Half-wave symmetry [x(t) = -x(t±T/2)]: Only odd harmonics

---

### Fourier Transform

**Definition:**
X(ω) = ∫x(t)e^(-jωt)dt

**Inverse:**
x(t) = (1/2π)∫X(ω)e^(jωt)dω

**Common Transforms:**

| x(t) | X(ω) |
|------|------|
| δ(t) | 1 |
| 1 | 2πδ(ω) |
| u(t) | πδ(ω) + 1/jω |
| e^(jω₀t) | 2πδ(ω-ω₀) |
| cos(ω₀t) | π[δ(ω-ω₀) + δ(ω+ω₀)] |
| sin(ω₀t) | (π/j)[δ(ω-ω₀) - δ(ω+ω₀)] |
| e^(-at)u(t) | 1/(a+jω) |
| te^(-at)u(t) | 1/(a+jω)² |
| rect(t/τ) | τsinc(ωτ/2) |
| sinc(t) | rect(ω/2π) |

**Properties:**

Linearity, Time Shifting, Frequency Shifting, Time Scaling, Duality, Time Differentiation, Time Integration, Convolution, Parseval's Theorem

---

## SECTION 7: NETWORKS

### Network Theorems

**Thevenin's Theorem:**
Any linear network can be replaced by:
- V_th = Open circuit voltage
- R_th = Equivalent resistance with all sources deactivated

**Norton's Theorem:**
Any linear network can be replaced by:
- I_N = Short circuit current
- R_N = Equivalent resistance (same as R_th)

Relation: V_th = I_N × R_th

**Superposition Theorem:**
Response in any element = Sum of responses due to each source acting alone

**Maximum Power Transfer:**
Maximum power transferred when: R_L = R_th
P_max = V_th²/(4R_th)

**Millman's Theorem:**
For parallel voltage sources:
V = (ΣV_k/R_k)/(Σ1/R_k)

**Tellegen's Theorem:**
For any network: Σv_k × i_k = 0
Conservation of power

**Reciprocity Theorem:**
In a linear bilateral network, ratio of response to excitation is same if positions are interchanged

---

### Two-Port Networks

**Impedance (Z) Parameters:**
V₁ = Z₁₁I₁ + Z₁₂I₂  
V₂ = Z₂₁I₁ + Z₂₂I₂

For reciprocal network: Z₁₂ = Z₂₁

**Admittance (Y) Parameters:**
I₁ = Y₁₁V₁ + Y₁₂V₂  
I₂ = Y₂₁V₁ + Y₂₂V₂

For reciprocal network: Y₁₂ = Y₂₁

**Hybrid (h) Parameters:**
V₁ = h₁₁I₁ + h₁₂V₂  
I₂ = h₂₁I₁ + h₂₂V₂

**Inverse Hybrid (g) Parameters:**
I₁ = g₁₁V₁ + g₁₂I₂  
V₂ = g₂₁V₁ + g₂₂I₂

**Transmission (ABCD) Parameters:**
V₁ = AV₂ - BI₂  
I₁ = CV₂ - DI₂

**Relations between Parameters:**
Z = Y⁻¹, h and g are inverses, etc.

**Image Impedance:**
Z_i1 = √(Z_oc1 × Z_sc1)  
Z_i2 = √(Z_oc2 × Z_sc2)

**Characteristic Impedance:**
For symmetrical network: Z₀ = √(Z_oc × Z_sc)

---

### Resonance

**Series RLC:**
Resonant frequency: f₀ = 1/(2π√(LC))
Quality factor: Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C)
Bandwidth: BW = f₀/Q = R/(2πL)

At resonance:
- Z = R (minimum)
- I = V/R (maximum)
- Power factor = 1
- V_L = V_C = QV

**Parallel RLC:**
Resonant frequency: f₀ = 1/(2π√(LC))
Quality factor: Q = ω₀CR = R/(ω₀L) = R√(C/L)
Bandwidth: BW = f₀/Q = 1/(2πCR)

At resonance:
- Z = R (maximum for ideal)
- I = V/R (minimum)
- Power factor = 1
- I_L = I_C = QI

---

### Filters

**Types:**
1. Low Pass (LPF): Passes low frequencies
2. High Pass (HPF): Passes high frequencies
3. Band Pass (BPF): Passes band of frequencies
4. Band Stop (BSF): Rejects band of frequencies

**Cutoff Frequency:**
ω_c = 1/(RC) for simple RC filters

**First Order LPF:**
Transfer function: 1/(1 + sRC)  
Cutoff: f_c = 1/(2πRC)  
Roll-off: -20 dB/decade

**First Order HPF:**
Transfer function: sRC/(1 + sRC)  
Cutoff: f_c = 1/(2πRC)  
Roll-off: +20 dB/decade

**Second Order Filters:**
Roll-off: ±40 dB/decade

**Butterworth Filter:**
Maximally flat response in passband

**Chebyshev Filter:**
Steeper roll-off but ripple in passband

**Bessel Filter:**
Linear phase response

---

### Graph Theory

**Tree:**
Connected subgraph containing all nodes but no loops

**Twigs:**
Branches in tree = n - 1 (where n = number of nodes)

**Links:**
Branches not in tree = b - (n - 1) (where b = total branches)

**Fundamental Cutset:**
One twig + minimum links to form cutset

**Fundamental Loop:**
One link + unique path in tree

**Incidence Matrix (A):**
Dimensions: (n-1) × b  
Elements: +1, -1, 0

**Fundamental Cutset Matrix (Q):**
Dimensions: (n-1) × b

**Fundamental Loop Matrix (B):**
Dimensions: (b-n+1) × b

Relation: BQ^T = 0 or QB^T = 0

---

## SECTION 8: MEASUREMENTS & INSTRUMENTATION

### Bridges

**Wheatstone Bridge:**
Measures: Medium resistances (1Ω to 100kΩ)
Balance condition: R₁/R₂ = R₃/R₄ or R₁R₄ = R₂R₃

**Kelvin Double Bridge:**
Measures: Low resistances (< 1Ω)
Eliminates: Lead and contact resistances
Balance: R₁/R₂ = R₃/R₄ + R_g (guard wire)

**Maxwell Bridge:**
Measures: Inductance
Balance: L = R₁R₂C₃  
Q-factor: Q = ωL/R

**Hay Bridge:**
Measures: High Q inductors
Balance: Different from Maxwell for high Q

**Anderson Bridge:**
Measures: Inductance using standard capacitor and resistors

**Schering Bridge:**
Measures: Capacitance and dissipation factor
Balance: C₁/C₂ = R₃/R₄  
Dissipation factor: D = tanδ = ωC₄R₄

**De Sauty Bridge:**
Measures: Capacitance
Balance: C₁/C₂ = R₄/R₃

**Wien Bridge:**
Measures: Frequency
Balance: f = 1/(2π√(R₁R₂C₁C₂))

---

### Instruments

**PMMC (Permanent Magnet Moving Coil):**
Measures: DC only
Principle: Force on current carrying coil in magnetic field
Deflecting torque: T_d = NBAI  
Controlling torque: T_c = Kθ  
At equilibrium: T_d = T_c  
θ ∝ I

**Advantages:** High sensitivity, uniform scale, no hysteresis
**Disadvantages:** Only DC, delicate, costly

**Moving Iron:**
Measures: AC and DC
Principle: Force on iron piece due to magnetic field
Attraction type or repulsion type
Scale: Non-uniform (cramped at beginning)

**Electrodynamometer:**
Measures: AC and DC (power, voltage, current)
Principle: Force between fixed and moving coils
Air cored coils (no hysteresis)
Can be used as wattmeter, voltmeter, ammeter

**Induction Type:**
Measures: AC energy (energy meters)
Principle: Rotating magnetic field induces eddy currents
Aluminum disc rotates proportional to power

**Hot Wire:**
Measures: RMS value (AC and DC)
Principle: Heating effect (I²R)

**Thermocouple:**
Measures: High frequency AC, RF
Principle: Seebeck effect

**Electrostatic:**
Measures: High voltages
Principle: Force between charged plates

---

### Measurement of Power

**Wattmeter (Electrodynamometer):**
Current coil: Series with load (carries load current)
Pressure coil: Parallel with load (measures voltage)
Reading: P = VI cosφ

**Three-Phase Power:**

Two-Wattmeter Method:
W₁ = V_L I_L cos(30° - φ)  
W₂ = V_L I_L cos(30° + φ)  
Total power: W₁ + W₂ = √3 V_L I_L cosφ

If φ < 60°: Both readings positive
If φ = 60°: One reading zero
If φ > 60°: One reading negative

Reactive power: √3(W₁ - W₂) = √3 V_L I_L sinφ
Power factor: tanφ = √3(W₁ - W₂)/(W₁ + W₂)

---

### Error Analysis

**Types of Errors:**

**Gross Errors:** Human mistakes (reading, recording, calculation)

**Systematic Errors:**
- Instrumental: Due to instrument defects
- Environmental: Temperature, humidity, etc.
- Observational: Parallax, etc.

**Random Errors:** Unpredictable variations

**Error Terms:**

Absolute Error: ε = X_m - X_t  
(Where X_m = measured value, X_t = true value)

Relative Error: ε_r = ε/X_t

Percentage Error: %Error = (ε/X_t) × 100

**Accuracy:** Closeness to true value
**Precision:** Repeatability of measurements

**Resolution:** Smallest change detectable
**Sensitivity:** Ratio of output change to input change

**Loading Effect:**
Instrument draws power from circuit, affecting measurement
Minimized by: High input impedance for voltmeters, low impedance for ammeters

---

## SECTION 9: DIGITAL ELECTRONICS

### Boolean Algebra

**Basic Laws:**

Commutative: A+B = B+A, AB = BA
Associative: A+(B+C) = (A+B)+C, A(BC) = (AB)C
Distributive: A(B+C) = AB+AC, A+BC = (A+B)(A+C)

Identity: A+0 = A, A·1 = A
Null: A+1 = 1, A·0 = 0
Idempotent: A+A = A, A·A = A
Complement: A+A' = 1, A·A' = 0
Involution: (A')' = A
Absorption: A+AB = A, A(A+B) = A
De Morgan's: (A+B)' = A'B', (AB)' = A'+B'

---

### Logic Gates

**AND:** Y = AB (Output high only if all inputs high)
**OR:** Y = A+B (Output high if any input high)
**NOT:** Y = A' (Inverter)
**NAND:** Y = (AB)' (Universal gate)
**NOR:** Y = (A+B)' (Universal gate)
**XOR:** Y = A⊕B = A'B + AB' (Output high if inputs differ)
**XNOR:** Y = (A⊕B)' = AB + A'B' (Output high if inputs same)

**Universal Gates:**
NAND and NOR can implement any logic function

---

### Flip-Flops

**SR Flip-Flop:**
S R | Q
0 0 | No change
0 1 | 0 (Reset)
1 0 | 1 (Set)
1 1 | Invalid/Forbidden

**JK Flip-Flop:**
J K | Q
0 0 | No change
0 1 | 0 (Reset)
1 0 | 1 (Set)
1 1 | Toggle

**D Flip-Flop:**
Q = D (Delay)

**T Flip-Flop:**
T = 0: No change
T = 1: Toggle

**Characteristic Equations:**
SR: Q⁺ = S + R'Q (with SR = 0)
JK: Q⁺ = JQ' + K'Q
D: Q⁺ = D
T: Q⁺ = T⊕Q

**Excitation Tables:**
Table showing required inputs for desired state transition

---

### Counters

**Asynchronous (Ripple) Counter:**
Flip-flops triggered one after another
Propagation delay accumulates
Simple, slow

**Synchronous Counter:**
All flip-flops triggered simultaneously
Faster, more complex

**Modulus:**
Number of distinct states
Mod-n counter counts 0 to n-1

**Maximum Modulus:**
For n flip-flops: 2ⁿ states

**Decade Counter:**
Mod-10 counter (counts 0 to 9)

**Ring Counter:**
One bit circulates through flip-flops
Mod-n requires n flip-flops

**Johnson Counter (Twisted Ring):**
Output of last inverted and fed to first
Mod-2n requires n flip-flops

---

### Number Systems

**Binary to Decimal:**
Σb_i × 2^i

**Decimal to Binary:**
Repeated division by 2

**Octal to Binary:**
Each octal digit = 3 binary bits

**Hexadecimal to Binary:**
Each hex digit = 4 binary bits

**Complements:**

1's Complement: Flip all bits
2's Complement: 1's complement + 1 (used for subtraction)

**Binary Addition:**
0+0=0, 0+1=1, 1+0=1, 1+1=10 (0 with carry 1)

**Binary Subtraction (using 2's complement):**
A - B = A + (2's complement of B)

---

## SECTION 10: GENERAL APTITUDE & ENGINEERING MATHEMATICS

### Quick Reference

**Percentages:**
% change = [(New - Old)/Old] × 100
Successive changes: a% followed by b% = (a + b + ab/100)%

**Profit & Loss:**
Profit% = (Profit/CP) × 100 = [(SP-CP)/CP] × 100
Loss% = (Loss/CP) × 100 = [(CP-SP)/CP] × 100

**Simple Interest:**
SI = PRT/100
Amount = P + SI = P(1 + RT/100)

**Compound Interest:**
Amount = P(1 + R/100)^T
For half-yearly: R' = R/2, T' = 2T
For quarterly: R' = R/4, T' = 4T

**Time & Work:**
If A can do work in n days, 1 day's work = 1/n
If A and B together in x days, 1/x = 1/a + 1/b

**Pipes & Cisterns:**
Inlet pipe: +ve work
Outlet pipe: -ve work

**Speed, Distance, Time:**
Speed = Distance/Time
Relative speed: Same direction: S₁ - S₂, Opposite: S₁ + S₂

**Trains:**
Time = (Length of train + Length of platform)/Speed

**Boats & Streams:**
Downstream: Speed = B + S
Upstream: Speed = B - S
Where B = boat speed, S = stream speed

**Probability:**
P(E) = n(E)/n(S)
P(E') = 1 - P(E)
P(A∪B) = P(A) + P(B) - P(A∩B)
For independent: P(A∩B) = P(A) × P(B)

**Permutations:**
ⁿPᵣ = n!/(n-r)!

**Combinations:**
ⁿCᵣ = n!/[(n-r)!r!]

**Integration:**
∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n≠-1)
∫1/x dx = ln|x| + C
∫e^x dx = e^x + C
∫a^x dx = a^x/ln(a) + C
∫sin(x) dx = -cos(x) + C
∫cos(x) dx = sin(x) + C

**Differentiation:**
d/dx(xⁿ) = nxⁿ⁻¹
d/dx(e^x) = e^x
d/dx(ln x) = 1/x
d/dx(sin x) = cos x
d/dx(cos x) = -sin x

**Matrices:**
det(AB) = det(A)det(B)
det(A⁻¹) = 1/det(A)
det(A^T) = det(A)
Eigenvalues: |A - λI| = 0
Trace = Sum of eigenvalues
det = Product of eigenvalues

---

## FINAL EXAM TIPS

### Do's:
✓ Read question carefully
✓ Identify keywords for formula selection
✓ Write formula first, then substitute values
✓ Check units in final answer
✓ Manage time: 1.8 min per question (100 questions in 3 hours)
✓ Attempt aptitude first (easy marks)
✓ Darken circles properly
✓ Use rough sheet for calculations

### Don'ts:
✗ Don't guess randomly (negative marking: -1/3)
✗ Don't spend >3 min on any question
✗ Don't panic if you don't know answer
✗ Don't leave OMR sheet incomplete
✗ Don't forget to attempt all aptitude questions

### Strategy:
1. Start with General Aptitude (15 questions, ~25 min)
2. Engineering Mathematics (10-12 questions, ~20 min)
3. Your strong subjects first
4. Skip uncertain questions, mark for review
5. Come back to marked questions if time permits

---

## QUICK REFERENCE CARD

**Print/Write these 20 most important:**

1. Transformer: E = 4.44fNΦ
2. DC Motor: E_b = V - I_aR_a
3. Induction Motor: s = (N_s-N_r)/N_s
4. Synchronous: P = (EV/X_s)sinδ
5. Transmission: SIL = V²/Z_c
6. Per Unit: Z_pu = Z_actual/Z_base
7. Rectifier: V_avg = (2V_m/π)cosα
8. Buck: V_o = DV_s
9. Boost: V_o = V_s/(1-D)
10. Inverting Op-Amp: V_o = -(R_f/R₁)V_i
11. Non-Inverting: V_o = (1+R_f/R₁)V_i
12. Closed Loop: T(s) = G/(1+GH)
13. 2nd Order: T_p = π/(ω_n√(1-ζ²))
14. Steady State: e_ss = lim(s→0) sE(s)
15. Laplace: L{e^(-at)} = 1/(s+a)
16. Thevenin: V_th = V_oc, R_th = V_oc/I_sc
17. Resonance: f₀ = 1/(2π√(LC))
18. Wheatstone: R₁/R₂ = R₃/R₄
19. Slip: s = (N_s-N_r)/N_s
20. Power: S = √(P²+Q²) = VI

---

**ALL THE BEST FOR GATE EE! 🎯**

**You've got this! Trust your preparation! 💪**

---

*Total Formulas: 100+*  

