package support;

import java.io.FileReader;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverBase {

	public static WebDriver driver = null;
	static Properties p = null;
	
	
	/**
	 * This method is used to launch the browser
	 */
	public WebDriver launchBrowser()
	{
		System.setProperty("webdriver.chrome.driver", Constants.WINDOWS_DRIVER_PATH);
		if(driver == null)
		{
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}
		return driver;
	}

	/**
	 * This method is used to read the properties file
	 */
	public static Properties loadProperties(){
		FileReader reader = null;
		try {
			if (p == null) {
				reader = new FileReader("config.properties");
				p = new Properties();
				p.load(reader);
			}
		} catch (Exception e) {
			System.out.println("Unable to read the properties file!");
			e.printStackTrace();
		}
		return p;
	}
	
	/**
	 * This method is used to terminate the browser
	 */
	public void tearDown() {
		if (driver != null) {
			driver.quit();
		}
	}
}
