/**
 * 
 */
package todo.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author allen
 *
 */
@XmlRootElement
public class Todo {
	private int id;
	private String name;
	private String owner;
	private String priority;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
}
