package Resumen;

public class Abstract {
    private  float base;

    private  float altura;

    @Override
    public String toString() {
        return "Abstract{" +
                "base=" + base +
                ", altura=" + altura +
                '}';
    }

    public Abstract(float base, float altura) {
        this.base = base;
        this.altura = altura;
    }

    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }
}
